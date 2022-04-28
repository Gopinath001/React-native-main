import { css } from "@emotion/react"
import { Text } from "components/Text"
import { Box } from "components/Box"
import {
	sizeRhythmVertical,
	sizeRhythmHorizontal,
	colorBorders,
} from "@rap-theme"

type AnnualPassProps = {
	id?: string
	year?: number
	isChild?: boolean
}

const rowStyles = css({
	marginTop: sizeRhythmVertical,
	borderWidth: 1,
	borderColor: colorBorders,
	textAlign: "center",
	width: "100%",
	maxHeight: 50,
})

const textStyles = css({
	textAlign: "center",
	paddingLeft: sizeRhythmHorizontal,
	paddingVertical: sizeRhythmVertical,
})

export function AnnualPass({ id, year, isChild }: AnnualPassProps) {
	return (
		<Box key={id} grid row css={rowStyles}>
			<Text css={textStyles}>
				{year} {isChild ? <>Child</> : <>Adult</>} annual pass
			</Text>
		</Box>
	)
}
