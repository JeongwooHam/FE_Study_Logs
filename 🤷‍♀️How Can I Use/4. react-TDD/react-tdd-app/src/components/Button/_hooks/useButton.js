import { useState } from 'react'

const useButton = () => {
	const [cnt, setCnt] = useState(0)

	const handlePlus = () => setCnt(prev => prev + 1)
	const handleMinus = () => setCnt(prev => prev - 1)
	return {
		cnt,
		setCnt,
		handlePlus,
		handleMinus,
	}
}

export default useButton
