import { Image } from "components/Image"
import { Loading } from "components/Loading"
// @ts-ignore
import { useMedalImagesQuery } from "@rap-api/cms"

type MedalImageProps = {
	month: number
	year: number
	type: string
	width?: number | string
	height?: number | string
}

export function MedalImage(props: MedalImageProps) {
	const { data, loading } = useMedalImagesQuery({
		variables: {
			month: props.month,
			year: props.year,
			type: props.type,
		},
		context: {
			clientName: "CMS",
		},
	})

	if (loading) return <Loading size={30} />

	if (!data?.medals?.length) return null

	return (
		<Image
			alt={data?.medals[0]?.Image?.alternativeText!}
			src={data?.medals[0]?.Image?.url!}
			width={props.width ?? 100}
			height={props.height ?? 100}
		/>
	)
}
