import { Image } from "components/Image"
import { Loading } from "components/Loading"
import { useMediaByNameQuery } from "@rap-api/cms"
import { SerializedStyles } from "@emotion/react"

type ImageByNameProps = {
	name: string
	width?: number | string
	height?: number | string
	css?: SerializedStyles
}

export function ImageByName({
	name,
	width,
	height,
	...props
}: ImageByNameProps) {
	const { data: imageData, loading: imageLoading } = useMediaByNameQuery({
		variables: {
			name,
		},
		context: {
			clientName: "CMS",
		},
	})

	if (
		!imageData ||
		!imageData?.publicMedias ||
		!imageData.publicMedias.length ||
		!imageData.publicMedias[0]?.source?.url
	)
		return null

	if (imageLoading) return <Loading size={width} />

	return (
		<Image
			{...props}
			src={imageData.publicMedias[0].source.url}
			alt={imageData.publicMedias[0].source.alternativeText!}
			width={width}
			height={height}
		/>
	)
}
