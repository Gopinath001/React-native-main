import React from "react"
import { Story, Meta } from "@storybook/react"

import { Logo, LogoProps } from "components/Logo"

export default {
	title: "Components/Logo",
	component: Logo,
	argTypes: {
		width: {
			control: { type: "range", min: 0, max: 1200 },
		},
		height: {
			control: { type: "range", min: 0, max: 1200 },
		},
	},
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />
export const WithWidth = Template.bind({})
WithWidth.args = {
	width: 300,
	height: 150,
}

export const WithHeight = Template.bind({})
WithHeight.args = {
	height: 300,
	width: 600,
}
