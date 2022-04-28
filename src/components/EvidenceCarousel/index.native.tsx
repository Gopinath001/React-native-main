import { Box } from "components/Box"
import { Button } from "components/Buttons"
import { RemoveRoundedIcon } from "icons/RemoveRounded"
import { colorBorders } from "@rap-theme"
import { css } from "@emotion/native"
import { Image } from "components/Image"
import { FlatList } from "react-native"

type EvidenceCarouselProps = {
	options: { id: string; contentUrl: string }[]
	onPress?: () => void
	onRemove?: (id: string) => void
}

export function EvidenceCarousel({
	options,
	onPress,
	onRemove,
}: EvidenceCarouselProps) {
	const containerStyles = css({
		
	})

	const imageStyles = css({
		position: "relative",
		
		width: 80,
		height: 80,
		
	})

	const buttonStyles = css({
		position: "absolute",
		bottom: 0,
		right: 0,
		height: 24,
		width: 24,

		zIndex: 1,
		backgroundColor: "#fff",
		borderWidth: 2,
		borderColor: colorBorders,
		borderRadius: 12,
		transform: [{ translateX: 12 }, { translateY: 12 }],
	})

	return (
		<Box
			marginV={12}
			css={[
				containerStyles,
				{
					minWidth: "100%",
					height: 96,
					flex: undefined,
				},
			]}
		>
			<FlatList
				style={{
					padding: 0,
					margin: 0,
				}}
				horizontal
				data={options}
				renderItem={({ item, index }) => {
					return (
						<Box
							key={item.id}
							css={{
								position: "relative",
								marginLeft: index !== 0 ? 12 : 0,
								borderColor: colorBorders,
								borderWidth: 1,
								height: 80,
							}}
						>
							{onRemove ? (
								<Button css={buttonStyles} onPress={() => onRemove(item.id)}>
									<RemoveRoundedIcon css={{ color: colorBorders }} />
								</Button>
							) : null}
							<Image
								alt={item.id}
								src={item.contentUrl}
								width={80}
								height={80}
								
							/>
						</Box>
					)
				}}
				keyExtractor={(item) => item.id}
			/>
		</Box>
	)
}
