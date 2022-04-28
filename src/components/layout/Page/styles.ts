import { css } from "@emotion/react"
import {
	sizeRhythmVertical,
	sizeBreakpointsMedium,
	sizeBreakpointsSmall,
} from "@rap-theme"
import { CurrentResponsiveMode } from "providers/Responsive"
import { PageLayoutProps } from "."

export const layoutStyles = css({
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	flexGrow: 0,
})

export const headerBackground = (
	_headerProps: PageLayoutProps,
	_currentResponsiveMode: CurrentResponsiveMode,
) =>
	css({
		flex: 1,
		flexShrink: 0,
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: sizeRhythmVertical * 1.5,
		paddingRight: sizeRhythmVertical * 1.5,
		width: "100%",
	})

export const bodyStyles = css`
	margin: 0 auto;
	max-width: ${sizeBreakpointsMedium}px;
	padding-bottom: 30px;
	overflow-x: hidden;

	@media (max-width: ${sizeBreakpointsSmall}px) {
		margin-top: 60px;
		margin-bottom: 60px;
	}

	@media (max-width: ${sizeBreakpointsMedium}px) {
		margin: 0 16px;
	}

	h1:first-of-type,
	h2:first-of-type,
	h3:first-of-type,
	h4:first-of-type,
	h5:first-of-type {
		margin-top: 0;
	}
`

export const wavyBackgroundStyles = css({
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	height: "100%",
})

export const imageHeight = "100%"

export const guestHamburgerStyles = css({
	flexGrow: 0,
	flexShrink: 1,
})
