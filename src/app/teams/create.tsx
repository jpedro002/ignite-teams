import { Link } from 'expo-router'
import { useEffect } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { HeaderWithBack } from '../../components/HeaderWithBack'

export default function CreateTeam() {
	useEffect(() => {
		console.log('errors')
	}, [])
	return (
		<>
			<StatusBar barStyle={'dark-content'} />

			<View className="flex-1  px-[19px] items-center justify-center">
				<Text>create team</Text>
				<Link href="/">goto shablau</Link>
			</View>
		</>
	)
}
