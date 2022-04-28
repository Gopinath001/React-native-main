import React from "react"
import { Story, Meta } from "@storybook/react"

import { Header as HeaderComp } from "components/layout/Header"
import { StaticRouter } from "react-router"

export default {
	title: "Components/Header",
	component: HeaderComp,
} as Meta

const Template: Story = (args) => (
	<StaticRouter>
		<HeaderComp {...args} />
	</StaticRouter>
)
export const Header = Template.bind({})
