import React from "react"
import { Story, Meta } from "@storybook/react"
import {
	PageLayout as PageLayoutComp,
	PageLayoutProps,
} from "components/layout/Page"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { StaticRouter } from "react-router"

export default {
	title: "Layouts/Page",
	component: PageLayoutComp,
} as Meta

const Template: Story<PageLayoutProps> = (args) => (
	<StaticRouter>
		<PageLayoutComp {...args}>
			<Box>
				<Text variant={"h1"}>I am a Header, on a page.</Text>
				<Text>
					This is a paragraph of text in a box on a screen, on a computer, in a
					building, on a planet, in a solar system, in a galaxy, in a universe,
					in a cosmos
				</Text>
				<Text variant={"h2"}>This text is inside of the page layout.</Text>
				<Text>
					The page layout includes the header and some context providers for
					things like current user, theme, routes and api connectivity.
				</Text>
			</Box>
		</PageLayoutComp>
	</StaticRouter>
)
export const PageLayout = Template.bind({})
PageLayout.args = {}
