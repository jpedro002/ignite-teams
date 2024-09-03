import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

interface FormCreateTeamProps {
	onSubmit: (data: FormType) => void
}

interface FormType {
	team: string
}

export const FormCreateTeam = ({ onSubmit }: FormCreateTeamProps) => {
	const {
		control,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm<FormType>()

	return (
		<>
			<Controller
				control={control}
				name="team"
				defaultValue=""
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						keyboardType="web-search"
						className="mt-8  rounded-lg p-4 mb-2
                              bg-custom_gray_700 text-white "
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholderTextColor="#7C7C8A"
						placeholder="Nome da turma"
					/>
				)}
			/>
			{errors.team && (
				<Text className="text-red-500 my-2">O campo é obrigatório</Text>
			)}

			<TouchableOpacity
				className="bg-custom_green_700 rounded-lg mt-2 py-4 px-6 gap-4"
				onPress={handleSubmit((data) => {
					if (data.team.trim()) {
						onSubmit(data)
						reset()
					} else {
						setError('team', {
							type: 'manual',
							message: 'O campo é obrigatório',
						})
					}
				})}
			>
				<Text className="text-custom_gray_100 text-center text-base font-roboto-bold">
					Criar
				</Text>
			</TouchableOpacity>
		</>
	)
}
