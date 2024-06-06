import { useState } from 'react'

interface TextAreaProps {
	value: string
	setValue: (newVal: string) => void
}
const TextArea: React.FC<TextAreaProps> = (props) => {
	const { value, setValue } = props
	return (
		<textarea
			className="p-2 h-full w-full bg-customBackground focus:outline-none resize-none overflow-hidden"
			placeholder="Note"
			value={value}
			onChange={(ev: any) => {
				setValue(ev.target.value)
			}}
		/>
	)
}

export default TextArea
