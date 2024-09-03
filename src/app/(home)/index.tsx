import { useTeams } from '@/contexts/teamsContext'
import Logo from '@assets/Logo.png'
import { Link } from 'expo-router'
import { Users } from 'lucide-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const HomeApp = () => {
	const { team } = useTeams()

	return (
		<View className="flex-1 justify-between ">
			<View>
				<Image source={Logo} className="mx-auto" />
				<Text className="text-2xl font-roboto-bold text-white text-center">
					Turmas
				</Text>
				<Text className="text-base font-roboto-regular text-custom_gray_300 text-center">
					jogue com a sua turma
				</Text>
			</View>
			<View className=" gap-4 my-8 grow">
				{team.map((t) => (
					<Link href={`/teams/${t.id}`} asChild key={t.id}>
						<TouchableOpacity className="bg-custom_gray_400 rounded-lg p-8 flex-row items-center gap-4">
							<Users size={32} strokeWidth={1} color={'#00B37E'} />
							<Text className="text-custom_gray_100 text-lg font-roboto-regular">
								{t.name}
							</Text>
						</TouchableOpacity>
					</Link>
				))}
				{team.length === 0 && (
					<Text className="text-custom_gray_200 text-xl font-bold text-center">
						Você ainda não tem times cadastrados
					</Text>
				)}
			</View>

			<Link href="/teams/create" asChild>
				<TouchableOpacity className="bg-custom_green_700 rounded-lg py-4 px-6 gap-4">
					<Text className="text-custom_gray_100 text-center text-base font-roboto-bold">
						Criar nova turma
					</Text>
				</TouchableOpacity>
			</Link>
		</View>
	)
}

export default HomeApp
