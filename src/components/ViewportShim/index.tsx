import { useEffect, useState } from "react"
import { colorBackgroundPrimary } from "@rap-theme"
import { css } from "@emotion/react"

export function ViewportShim({
	onClick,
}: {
	onClick?: (event: unknown) => void
}) {
	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		requestAnimationFrame(() => {
			setIsMounted(true)
		})
	})

	const styles = css(`
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${colorBackgroundPrimary};
		opacity: 0;
		will-change: opacity;
		${isMounted && "opacity: 0.8;"}
	`)

	return <div css={styles} onClick={onClick} />
}
