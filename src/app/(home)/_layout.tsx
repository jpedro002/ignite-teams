import constants from 'expo-constants'
import { Slot } from 'expo-router'
import { Text, View } from 'react-native'

const { statusBarHeight } = constants

export default function HomeLayout() {
	return (
		<View
			className="flex-1  bg-custom_gray_600 px-[19px] pb-[35px] "
			style={{
				paddingTop: 24 + statusBarHeight,
			}}
		>
			<Slot />
		</View>
	)
}
