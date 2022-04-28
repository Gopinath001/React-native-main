import { css } from "@emotion/react"
import {
	sizeBorderRadius,
	sizeFontRegular,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"

export const baseStyles = css({
	borderRadius: sizeBorderRadius,
	paddingHorizontal: sizeRhythmHorizontal,
	paddingVertical: sizeRhythmVertical,
})

export const textStyles = css({
	fontSize: sizeFontRegular,
})

export const warningStyles = css({
	backgroundColor: "#BC8B2C",
})

export const infoStyles = css({
	backgroundColor: "#1E54B7",
})

export const errorStyles = css({
	backgroundColor: "#AB1300",
})

export const warningTextStyles = css({
	color: "#FFFFFF",
})

export const infoTextStyles = css({
	color: "#FFFFFF",
})

export const errorTextStyles = css({
	color: "#FFFFFF",
})
