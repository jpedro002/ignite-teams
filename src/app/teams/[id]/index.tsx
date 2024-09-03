import { useLocalSearchParams } from 'expo-router'
// src/app/teams/[id]/index.tsx
import { Text, View } from 'react-native'

const TeamDetails = () => {
	const local = useLocalSearchParams()

	console.log('Local:', local.id) // `id` will be extracted from the route

	return (
		<View>
			<Text>Team Details for ID: {local.id}</Text>
		</View>
	)
}

export default TeamDetails
