interface PeopleType {
	id: number
	name: string
	subTeam: string
}

interface TeamType {
	id: number
	name: string
	people: PeopleType[] | []
}

type ADD_TEAM = {
	type: 'ADD_TEAM'
	payload: { team: TeamType }
}
type REMOVE_TEAM = {
	type: 'REMOVE_TEAM'
	payload: { teamId: number }
}
type ADD_PEOPLE_IN_TEAM = {
	type: 'ADD_PEOPLE_IN_TEAM'
	payload: { teamId: number; people: PeopleType }
}
type REMOVE_PEOPLE_IN_TEAM = {
	type: 'REMOVE_PEOPLE_IN_TEAM'
	payload: { teamId: number; peopleId: number }
}

type TeamAction =
	| ADD_TEAM
	| ADD_PEOPLE_IN_TEAM
	| REMOVE_PEOPLE_IN_TEAM
	| REMOVE_TEAM

const teamReducer = (team: TeamType[], action: TeamAction) => {
	switch (action.type) {
		case 'ADD_TEAM': {
			return [...team, action.payload.team]
		}
		case 'ADD_PEOPLE_IN_TEAM': {
			return team.map((t) => {
				if (t.id === action.payload.teamId) {
					return { ...t, people: [...t.people, action.payload.people] }
				}
				return t
			})
		}
		case 'REMOVE_PEOPLE_IN_TEAM': {
			return team.map((t) => {
				if (t.id === action.payload.teamId) {
					return {
						...t,
						people: t.people.filter((p) => p.id !== action.payload.peopleId),
					}
				}
				return t
			})
		}
		case 'REMOVE_TEAM': {
			return team.filter((t) => t.id !== action.payload.teamId)
		}

		default:
			return team
	}
}

export { teamReducer, type TeamType, type PeopleType }
