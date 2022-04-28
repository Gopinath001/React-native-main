import { Text } from "components/Text"
import { PropsWithChildren } from "react"
import { Link as RRLink } from "react-router-dom"
import { LinkProps } from "./types"

export function Link({
	href,
	title,
	onClick,
	className,
	css,
	children,
}: PropsWithChildren<LinkProps>) {
	if (!href) return <Text>ERROR: Link specified with no href.</Text>
	else if (href.startsWith("http"))
		return (
			<a
				href={href}
				title={title}
				rel="noopener noreferrer"
				onClick={onClick}
				className={className}
				css={css}
			>
				{children}
			</a>
		)
	return (
		<RRLink to={href} onClick={onClick} css={css} className={className}>
			<Text>{children}</Text>
		</RRLink>
	)
}
