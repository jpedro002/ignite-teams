import { Link } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import React from 'react'
import { Image, View } from 'react-native'
import Logo from '../assets/images/Logo.png'

export const HeaderWithBack = () => {
	return (
		<View className=" flex-row items-center justify-between ">
			<Link href="/">
				<ChevronLeft size={32} color={'white'} strokeWidth={1} />
			</Link>
			<Image source={Logo} />
		</View>
	)
}
