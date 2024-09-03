import { FormAddPeople } from '@/components/FormAddPeople'
import { useTeams } from '@/contexts/teamsContext'
import { useLocalSearchParams } from 'expo-router'
import { UserRound, X } from 'lucide-react-native'
import { useMemo, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// todo refact to smaller components

const TeamDetails = () => {
	const [currentSubTeam, setCurrentSubTeam] = useState('a')

	const local = useLocalSearchParams()

	const {
		team,
		handleAddPeopleInTeam,
		handleRemovePeopleInTeam,
		handleRemoveTeam,
	} = useTeams()

	const currentTeam = useMemo(
		() => team.find((t) => t.id === Number(local.id)),
		[team, local.id],
	)

	const handleAddPerson = (person: {
		people: string
	}) => {
		handleAddPeopleInTeam(Number(local.id), {
			id: Math.ceil(Math.random() * 1000),
			name: person.people,
			subTeam: currentSubTeam,
		})
	}

	const handleRemovePerson = (peopleId: number) => {
		handleRemovePeopleInTeam(Number(local.id), peopleId)
	}
	const handleRemoveTeama = () => {
		handleRemoveTeam(Number(local.id))
	}

	return (
		<View className="mt-9 flex-1 pb-6">
			<View className="mb-8">
				<Text className="text-2xl font-roboto-bold text-white text-center">
					Nome da turma
				</Text>
				<Text className="text-base font-roboto-regular text-custom_gray_300 text-center">
					adicione a galera e separe os times
				</Text>
			</View>
			<FormAddPeople onSubmit={handleAddPerson} />
			<View className=" flex-row items-center gap-2">
				<TouchableOpacity
					className={` border  py-2 px-3 rounded-lg mt-4 ${
						currentSubTeam === 'a'
							? ' border-custom_green_500'
							: 'border-transparent'
					} `}
					onPress={() => {
						setCurrentSubTeam('a')
					}}
				>
					<Text className="text-white text-center font-roboto-bold uppercase">
						time a
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className={` border  py-2 px-3 rounded-lg mt-4 ${
						currentSubTeam === 'b'
							? ' border-custom_green_500'
							: 'border-transparent'
					} `}
					onPress={() => {
						setCurrentSubTeam('b')
					}}
				>
					<Text className="text-white text-center font-roboto-bold uppercase">
						time b
					</Text>
				</TouchableOpacity>
			</View>
			<View className="mt-8 ">
				{currentTeam?.people.map((person) => {
					if (person.subTeam !== currentSubTeam) {
						return null
					}
					return (
						<View
							key={person.id}
							className="bg-custom_gray_500 flex-row rounded-md justify-between items-center  p-4 gap-2"
						>
							<UserRound size={24} strokeWidth={1.75} color={'white'} />
							<Text className="text-white text-base font-roboto-regular capitalize grow">
								{person.name}
							</Text>
							<TouchableOpacity
								onPress={() => {
									handleRemovePerson(person.id)
								}}
							>
								<X
									size={24}
									strokeWidth={1.75}
									color={'#CC2937'}
									className="rotate-45"
								/>
							</TouchableOpacity>
						</View>
					)
				})}
			</View>
			<TouchableOpacity
				className="bg-custom_red_dark rounded-lg py-4 px-6 gap-4 mt-auto"
				onPress={handleRemoveTeama}
			>
				<Text className="text-custom_gray_100 text-center text-base font-roboto-bold">
					Remover turma
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default TeamDetails
