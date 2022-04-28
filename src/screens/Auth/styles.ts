import { css } from "@emotion/react"
import {
	sizeRhythmVertical,
	sizeBreakpointsMedium,
	sizeBreakpointsSmall,
} from "@rap-theme"

export const buttonStyles = css({
	width: "100%",
	textAlign: "center",
	marginBottom: sizeRhythmVertical / 2,
})

export const containerStyles = css`
	height: 100px;
	width: 100%;
	max-width: ${sizeBreakpointsMedium}px;

	@media (max-width: ${sizeBreakpointsSmall}px) {
		margin-top: 60px;
		margin-bottom: 60px;
	}

	@media (max-width: ${sizeBreakpointsMedium}px) {
		padding: 0 16px;
	}
`

export const logoStyles = css({
	marginBottom: sizeRhythmVertical * 5,
})

export const headingStyles = css({
	marginTop: sizeRhythmVertical * 2,
	marginBottom: sizeRhythmVertical,
})
