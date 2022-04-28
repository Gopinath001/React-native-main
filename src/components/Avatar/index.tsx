import { Interpolation, Theme } from "@emotion/react"
import { UserProfile } from "@rap-api/core"
import { Box } from "../Box"
import { Text } from "../Text"
import { textStyles, boxStyles } from "./styles"

export function Avatar({
	user,
	onPress,
	css: styles,
	imageCss,
	...rest
}: {
	user: Pick<UserProfile, "id" | "initials">
	onPress?: (event?: unknown) => void
	css?: Interpolation<Theme>
	style?: { width?: number; height?: number }
	imageCss?: Interpolation<Theme>
}) {
	const content = (
		<Text
			css={[
				textStyles,
				{
					fontSize: rest?.style?.width ? rest?.style?.width / 3 : undefined,
				},
			]}
		>
			{user ? user.initials : "Guest"}
		</Text>
	)

	return (
		<Box css={[boxStyles(rest.style), styles, rest.style]} onPress={onPress}>
			{content}
		</Box>
		
	)
}
