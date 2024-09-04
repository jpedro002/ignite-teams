import { Plus } from 'lucide-react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

interface FormAddPeopleProps {
	onSubmit: (data: FormType) => void
}

interface FormType {
	people: string
}

export const FormAddPeople = ({ onSubmit }: FormAddPeopleProps) => {
	const {
		control,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm<FormType>()

	return (
		<>
			<View className="relative ">
				<Controller
					control={control}
					name="people"
					defaultValue=""
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							className=" rounded-lg p-4 
                              bg-custom_gray_700 text-white "
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholderTextColor="#7C7C8A"
							placeholder="Nome da turma"
							returnKeyType="search"
							onSubmitEditing={handleSubmit((data) => {
								if (data.people.trim()) {
									onSubmit(data)
									reset()
								} else {
									setError('people', {
										type: 'manual',
										message: 'O campo é obrigatório',
									})
								}
							})}
						/>
					)}
				/>

				<TouchableOpacity
					className="size-9 items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 rounded-full "
					onPress={handleSubmit((data) => {
						if (data.people.trim()) {
							onSubmit(data)
							reset()
						} else {
							setError('people', {
								type: 'manual',
								message: 'O campo é obrigatório',
							})
						}
					})}
				>
					<Plus color={'#00875F'} size={24} className="" />
				</TouchableOpacity>
			</View>
			{errors.people && (
				<Text className="text-red-500 my-2 ml-1">O campo é obrigatório</Text>
			)}
		</>
	)
}
