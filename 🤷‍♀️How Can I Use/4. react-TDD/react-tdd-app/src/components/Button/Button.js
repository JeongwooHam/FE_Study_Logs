import useButton from './_hooks/useButton'

const Button = () => {
	const { cnt, handleMinus, handlePlus, disabled, handleActiveMode } =
		useButton()

	return (
		<div>
			<div>
				<button
					data-testid="minusBtn"
					onClick={handleMinus}
					disabled={disabled}
				>
					-
				</button>
				<div data-testid="counter">{cnt}</div>
				<button data-testid="plusBtn" onClick={handlePlus} disabled={disabled}>
					+
				</button>
			</div>
			<div>
				<button
					data-testid="onoffBtn"
					style={{ backgroundColor: 'black', color: 'white' }}
					onClick={handleActiveMode}
				>
					{cnt}
				</button>
			</div>
		</div>
	)
}

export default Button
