import React from "react"
import { Story, Meta } from "@storybook/react"

import { Loading as LoadingComp } from "components/Loading"

export default {
	title: "Components/Loading",
	component: LoadingComp,
	argTypes: {
		size: {
			control: { type: "range", min: 0, max: 1200 },
		},
	},
} as Meta

const Template: Story<{ size: number }> = (args) => <LoadingComp {...args} />
export const Loading = Template.bind({
	size: 150,
})
