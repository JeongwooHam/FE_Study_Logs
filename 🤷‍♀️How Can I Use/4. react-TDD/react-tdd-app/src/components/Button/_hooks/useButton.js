import { useState } from 'react'

const useButton = () => {
	const [disabled, setDisabled] = useState(false)
	const [cnt, setCnt] = useState(0)

	const handlePlus = () => setCnt(prev => prev + 1)
	const handleMinus = () => setCnt(prev => prev - 1)

	const handleActiveMode = () => setDisabled(prev => !prev)
	return {
		cnt,
		setCnt,
		handlePlus,
		handleMinus,
		disabled,
		handleActiveMode,
	}
}

export default useButton
