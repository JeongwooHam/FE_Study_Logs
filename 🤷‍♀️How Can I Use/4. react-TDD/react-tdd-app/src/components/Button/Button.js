import useButton from './_hooks/useButton'

const Button = () => {
	const { cnt, handleMinus, handlePlus } = useButton()

	return (
		<div>
			<div>
				<button data-testid="minusBtn" onClick={handleMinus}>
					-
				</button>
				<div data-testid="counter">{cnt}</div>
				<button data-testid="plusBtn" onClick={handlePlus}>
					+
				</button>
			</div>
			<div data-testid="onOffBtn">{cnt}</div>
		</div>
	)
}

export default Button
