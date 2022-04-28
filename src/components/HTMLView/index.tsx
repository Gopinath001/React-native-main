import { Theme } from "@emotion/react"
import { Interpolation } from "@emotion/serialize"
import { Text } from "components/Text"

export function HTMLView({
	html,
}: {
	html: string
	styles?: Interpolation<Theme>
}) {
	return (
		<Text verticalMargin={false}>
			<div
				dangerouslySetInnerHTML={{
					__html: html,
				}}
			/>
		</Text>
	)
}
