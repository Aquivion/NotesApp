import { useState } from 'react'

interface TextInputProps {
	value: string
	setValue: (newVal: string) => void
}

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
	const { value, setValue } = props
	return (
		<input
			title="Title"
			placeholder="Title"
			type="text"
			value={value}
			onChange={(ev: any) => setValue(ev.target.value)}
			className=" p-2 w-full bg-customBackground focus:outline-none text-xl"
		/>
	)
}

export default TextInput
