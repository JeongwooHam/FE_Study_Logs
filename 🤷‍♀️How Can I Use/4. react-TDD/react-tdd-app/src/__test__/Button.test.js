import { render, screen } from '@testing-library/react'
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
	// expect(counterElement).toBe(0) > 이때는 컴포넌트 전체가 들어와서 Failed
	expect(plusBtnElement).toHaveTextContent('+')
})

// 빼기 버튼
test('minus button', () => {
	render(<Button />)
	const minusBtnElement = screen.getByTestId('minusBtn')
	// expect(counterElement).toBe(0) > 이때는 컴포넌트 전체가 들어와서 Failed
	expect(minusBtnElement).toHaveTextContent('-')
})
