import { onError } from "@apollo/client/link/error"
import {
	ApolloClient,
	ApolloLink,
	ApolloProvider,
	HttpOptions,
	InMemoryCache,
} from "@apollo/client"
import fetch from "cross-fetch"
import { PropsWithChildren, useContext } from "react"
import Helmet from "react-helmet"
import { CognitoContext } from "./Cognito"
import { createUploadLink } from "apollo-upload-client"
import introspectionResults from "../@rap-api/fragments"

type ProviderOptions = {
	ssrMode?: boolean
	headers?: HttpOptions["headers"]
}


const noAuthOperations = new Set([
	"AvailableEntryMonths",
	"ChallengesList",
	"GetProducts",
	"GetCurrencies",
])

export const GraphQLContext = (
	props: PropsWithChildren<ProviderOptions>,
): JSX.Element => {
	const { token } = useContext(CognitoContext)
	const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
		if (graphQLErrors) {
			graphQLErrors.map(({ message, locations }) => {
				console.error(
					`[GraphQL error]: Operation: ${operation.operationName} | Message: ${message} | Location: `,
					locations,
				)
			})
		}

		if (networkError) {
			console.log(networkError)
			console.error(`[Network error]:`, networkError, graphQLErrors, operation)
		}
	})

	const clientCache = new InMemoryCache({
		possibleTypes: introspectionResults.possibleTypes,
	})

	if (!props.ssrMode) {
		try {
			clientCache.restore(
				
				JSON.parse((window as any)?.__APOLLO_STATE__ ?? "{}"),
			)
		} catch (error) {
			console.error("Failed to restore the cached state, malformed", error)
		}
	}

	const linkOptions = {
		uri: process.env.CORE_API_ROOT + "/graphql",
		fetch,
	}

	const cmsLinkOptions = {
		uri: process.env.CMS_API_ROOT,
		fetch,
		headers: props.headers,
	}

	const authMiddleware = new ApolloLink((operation, forward) => {
		// add the authorization to the headers
		if (
			token &&
			token.length > 0 &&
			!noAuthOperations.has(operation.operationName)
		) {
			operation.setContext(({ headers = {} }) => ({
				headers: {
					...headers,
					authorization: "Bearer " + token,
				},
			}))
		}

		return forward(operation)
	})

	const client = new ApolloClient({
		ssrMode: props.ssrMode,
		link: ApolloLink.split(
			(operation) => operation.getContext().clientName === "CMS",
			ApolloLink.from([
				errorLink,
				//@ts-ignore
				createUploadLink(cmsLinkOptions),
			]),
			ApolloLink.from([
				authMiddleware,
				errorLink,
				//@ts-ignore
				createUploadLink(linkOptions),
			]),
		),
		cache: clientCache,
	})

	if (props.ssrMode) {
		const initialState = client.extract()
		return (
			<>
				<Helmet>
					<script
						dangerouslySetInnerHTML={{
							__html: `window.__APOLLO_STATE__=${JSON.stringify(
								initialState,
							).replace(/</g, "\\u003c")};`,
						}}
					/>
				</Helmet>
				<ApolloProvider client={client}>{props.children}</ApolloProvider>
			</>
		)
	}

	return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
