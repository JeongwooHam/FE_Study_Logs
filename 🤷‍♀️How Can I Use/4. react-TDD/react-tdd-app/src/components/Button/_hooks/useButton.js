import { useState } from 'react'

const useButton = () => {
	const [cnt, setCnt] = useState(0)

	const handlePlus = () => setCnt(cnt + 1)
	const handleMinus = () => setCnt(cnt - 1)

	return {
		cnt,
		setCnt,
		handlePlus,
		handleMinus,
	}
}

export default useButton
