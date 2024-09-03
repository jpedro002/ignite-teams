import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const HomeApp = () => {
	return (
		<View className="flex-1">
			<Text className="text-4xl font-bold text-white">Hello HomeApp a</Text>
			<Link href="/teams/create" className="text-2xl font-bold text-white">
				create team
			</Link>
			<Link href="/teams/1" className="text-2xl font-bold text-white">
				esp team
			</Link>
		</View>
	)
}

export default HomeApp
