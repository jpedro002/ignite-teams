import { FormCreateTeam } from '@/components/FormCreateTeam'
import { useTeams } from '@/contexts/teamsContext'
import { Users } from 'lucide-react-native'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function CreateTeam() {
	const { handleAddTeam } = useTeams()

	const handleSubmit = (data: {
		team: string
	}) => {
		console.log(data)
		handleAddTeam({
			id: Math.ceil(Math.random() * 1000),
			name: data.team,
			people: [],
		})
	}

	return (
		<View className="flex-1 justify-center ">
			<View className="items-center ">
				<Users size={56} strokeWidth={1} color={'#00B37E'} />
				<Text className="text-2xl font-roboto-bold text-white text-center mt-6">
					Nova Turma
				</Text>
				<Text className="text-base font-roboto-regular text-custom_gray_300 text-center">
					crie uma turma para adicionar pessoas
				</Text>
			</View>
			<FormCreateTeam onSubmit={handleSubmit} />
		</View>
	)
}
