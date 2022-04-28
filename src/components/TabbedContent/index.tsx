import { Text } from "components/Text"
import { Box } from "components/Box"
import { colorBrandPrimary } from "@rap-theme"
import {
	containerStyles,
	tabStyles,
	tabTextStyles,
	secondaryTabStyles,
	secondaryTabTextStyles,
	tabWrapper,
} from "./styles"

export type Tab = {
	name: string
	disabled?: boolean
	content: React.FC
	color?: string
}

type TabbedContentProps = {
	tabs: Tab[]
	currentTab?: number
	setCurrentTab: (index: number) => void
	variant?: string
}

function TabButton({
	variant,
	name,
	active,
	index,
	onPress,
	disabled,
	color,
}: {
	variant: string
	name: string
	active: boolean
	index: number
	onPress: (index: number) => void
	disabled?: boolean
	color?: string
}): JSX.Element {
	// If colour isn't set, use brand primary
	color = color ? color : colorBrandPrimary

	switch (variant) {
		case "secondary":
			return (
				<Box
					column
					css={[secondaryTabStyles(active, color)]}
					onPress={() => !disabled && onPress(index)}
				>
					<Text light variant="h4" css={[secondaryTabTextStyles(active)]}>
						{name}
					</Text>
				</Box>
			)
		case "primary":
		default:
			return (
				<Box
					column
					css={tabStyles(active, color)}
					onPress={() => !disabled && onPress(index)}
				>
					<Text css={tabTextStyles(active)}>{name}</Text>
				</Box>
			)
	}
}

export function TabbedContent({
	variant = "primary",
	tabs,
	currentTab,
	setCurrentTab,
}: TabbedContentProps): JSX.Element {
	const Component = tabs[currentTab ?? 0]?.content

	return (
		<Box grid column css={containerStyles}>
			<Box
				grid
				row
				nowrap
				marginH={8}
				css={[tabWrapper, { flexGrow: 0, marginBottom: 16 }]}
			>
				{tabs.map(({ name, disabled, color }, tabIndex) => (
					<TabButton
						key={name + tabIndex}
						variant={variant}
						active={currentTab === tabIndex}
						index={tabIndex}
						name={name}
						disabled={disabled}
						onPress={setCurrentTab}
						color={color}
					/>
				))}
			</Box>
			<Box grid column>
				{Component && <Component />}
			</Box>
		</Box>
	)
}
