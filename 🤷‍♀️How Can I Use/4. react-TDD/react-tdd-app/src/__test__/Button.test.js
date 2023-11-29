import { fireEvent, render, screen } from '@testing-library/react'
import Button from '../components/Button/Button'

// 렌더링되는 텍스트 부분
test('count starts from 0', () => {
	render(<Button />)
	const counterElement = screen.getByTestId('counter')
	// expect(counterElement).toBe(0) > 이때는 컴포넌트 전체가 들어와서 Failed
	expect(counterElement).toHaveTextContent(0)
})

// 더하기 버튼
test('plus button', () => {
	render(<Button />)
	const plusBtnElement = screen.getByTestId('plusBtn')
	expect(plusBtnElement).toHaveTextContent('+')

	// 클릭 이벤트 테스트
	fireEvent.click(plusBtnElement)
	const counterElement = screen.getByTestId('counter')
	expect(counterElement).toHaveTextContent(1)
})

// 빼기 버튼
test('minus button', () => {
	render(<Button />)
	const minusBtnElement = screen.getByTestId('minusBtn')
	expect(minusBtnElement).toHaveTextContent('-')

	// 클릭 이벤트 테스트
	fireEvent.click(minusBtnElement)
	const counterElement = screen.getByTestId('counter')
	expect(counterElement).toHaveTextContent(-1)
})

// onoff 버튼
test('onoff button', () => {
	render(<Button />)
	const onoffBtnElement = screen.getByTestId('onoffBtn')
	expect(onoffBtnElement).toHaveStyle({
		backgroundColor: 'black',
		color: 'white',
	})
})

test('handle whether the button is disabled with the onoff button click', () => {
	render(<Button />)
	const onoffBtnElement = screen.getByTestId('onoffBtn')
	fireEvent.click(onoffBtnElement)
	const plusBtnElement = screen.getByTestId('plusBtn')
	const minusBtnElement = screen.getByTestId('minusBtn')

	expect(plusBtnElement).toBeDisabled()
	expect(minusBtnElement).toBeDisabled()
})
