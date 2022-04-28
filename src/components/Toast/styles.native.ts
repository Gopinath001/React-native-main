import { css } from "@emotion/native"
import {
	sizeBorderRadius,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
	sizeFontRegular,
} from "@rap-theme"

export const baseStyles = css({
	width: "100%",
	borderRadius: sizeBorderRadius,
	paddingHorizontal: sizeRhythmHorizontal,
	paddingVertical: sizeRhythmVertical,
	marginBottom: sizeRhythmVertical,
})

export const textStyles = css({
	flexShrink: 1,
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
