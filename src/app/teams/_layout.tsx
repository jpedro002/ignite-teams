import { HeaderWithBack } from '@/components/HeaderWithBack'
import constants from 'expo-constants'
import { Slot } from 'expo-router'
import { Text, View } from 'react-native'

const { statusBarHeight } = constants

export default function LayoutHome() {
	return (
		<View
			className="flex-1  bg-custom_gray_600 px-[19px] "
			style={{
				paddingTop: 24 + statusBarHeight,
			}}
		>
			<HeaderWithBack />
			<Slot />
		</View>
	)
}
