import { css } from "@emotion/react"
import { Box } from "./Box"
import { Text } from "./Text"
import { Auth } from "aws-amplify"
import { PropsWithChildren } from "react"
import {
	sizeBorderRadius,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "../@rap-theme"

export function AccountDropdown({
	children,
	open,
}: PropsWithChildren<{ open: boolean }>) {
	const styles = css({
		position: "relative",
		height: 50,
	})
	const dropdownStyles = css({
		position: "absolute",
		backgroundColor: "white",
		paddingLeft: sizeRhythmHorizontal,
		paddingRight: sizeRhythmHorizontal,
		paddingTop: sizeRhythmVertical,
		paddingBottom: sizeRhythmVertical,
		top: 50,
		height: open ? "auto" : 0,
		overflow: "hidden",
		right: 0,
		visibility: open ? "visible" : "hidden",
		borderRadius: sizeBorderRadius,
	})
	return (
		<Box grid column css={styles}>
			{children}
			<Box grid column css={dropdownStyles}>
				<Box row>
					<Text variant={"link"} href="/profile">
						PROFILE
					</Text>
				</Box>
				<Box row>
					<Text href={"#"} variant={"link"} onPress={() => Auth.signOut()}>
						LOGOUT
					</Text>
				</Box>
			</Box>
		</Box>
	)
}
