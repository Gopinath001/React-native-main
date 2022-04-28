import { css } from "@emotion/react"
import { NavLink, NavLinkProps } from "react-router-dom"
import { colorBrandAlternative, colorFontBase } from "../../../@rap-theme"
import { Box } from "../../Box"
import { Text } from "../../Text"

export function HeaderLink(props: NavLinkProps) {
	const boxStyles = css({
		textAlign: "center",
		borderBottom: props.isActive ? "3px solid " + colorBrandAlternative : "0",
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
	})
	const linkStyles = css({
		color: colorFontBase,
	})
	const { children, ...link } = props
	const Component = link.to.toString().startsWith("http") ? "a" : NavLink
	return (
		<Box column css={boxStyles}>
			<Component
				{...link}
				href={link.to.toString()}
				activeStyle={{ borderBottom: "3px solid " + colorBrandAlternative }}
				style={{ display: "flex" }}
			>
				<Text bold css={linkStyles}>
					{children}
				</Text>
			</Component>
		</Box>
	)
}
