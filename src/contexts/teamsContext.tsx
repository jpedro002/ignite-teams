import {
	type PeopleType,
	type TeamType,
	teamReducer,
} from '@/reducers/TeamsReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useReducer,
} from 'react'

const TEAM_STORAGE_KEY = 'teamsData'

type TeamsContext = {
	team: TeamType[]
	handleAddTeam: (team: TeamType) => void
	handleAddPeopleInTeam: (teamId: number, people: PeopleType) => void
	handleRemovePeopleInTeam: (teamId: number, peopleId: number) => void
	handleRemoveTeam: (teamId: number) => void
}

const teamsContext = createContext({} as TeamsContext)

const TeamsProvider = ({ children }: { children: ReactNode }) => {
	const [team, dispatchTeam] = useReducer(teamReducer, [] as TeamType[])

	const handleAddTeam = (team: TeamType) => {
		dispatchTeam({ type: 'ADD_TEAM', payload: { team } })
		router.replace(`/teams/${team.id}`)
	}

	const handleRemoveTeam = (teamId: number) => {
		dispatchTeam({
			type: 'REMOVE_TEAM',
			payload: { teamId },
		})
		router.replace('/')
	}
	const handleAddPeopleInTeam = (teamId: number, people: PeopleType) => {
		dispatchTeam({ type: 'ADD_PEOPLE_IN_TEAM', payload: { teamId, people } })
	}

	const handleRemovePeopleInTeam = (teamId: number, peopleId: number) => {
		dispatchTeam({
			type: 'REMOVE_PEOPLE_IN_TEAM',
			payload: { teamId, peopleId },
		})
	}

	useEffect(() => {
		const loadTeams = async () => {
			try {
				const storedTeams = await AsyncStorage.getItem(TEAM_STORAGE_KEY)
				if (storedTeams) {
					dispatchTeam({
						type: 'INICIALIZE_FROM_STORE',
						payload: JSON.parse(storedTeams),
					})
				}
			} catch (error) {
				console.error('Failed to load teams from storage:here', error)
			}
		}
		loadTeams()
	}, [])

	useEffect(() => {
		const saveTeams = async () => {
			try {
				await AsyncStorage.setItem(TEAM_STORAGE_KEY, JSON.stringify(team))
			} catch (error) {
				console.error('Failed to save teams to storage:', error)
			}
		}
		saveTeams()
	}, [team])

	return (
		<teamsContext.Provider
			value={{
				team,
				handleAddPeopleInTeam,
				handleAddTeam,
				handleRemovePeopleInTeam,
				handleRemoveTeam,
			}}
		>
			{children}
		</teamsContext.Provider>
	)
}

const useTeams = () => useContext(teamsContext)

export { TeamsProvider, useTeams }
