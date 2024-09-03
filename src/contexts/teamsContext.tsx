import {
	type PeopleType,
	type TeamType,
	teamReducer,
} from '@/reducers/TeamsReducer'
import { router } from 'expo-router'
import { type ReactNode, createContext, useContext, useReducer } from 'react'

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
