import MainLogo1 from '../../img/main-logo.png'
import MainLogo2 from '../../img/main-img1.png'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderLogoImage = () => {
	// 마우스 올리면 헤더 로고 이미지 변경되는 효과 구현
	const [headerImage, setHeaderImage] = useState(MainLogo1)

	const navigate = useNavigate()

	const handleLogoChange = () => {
		setHeaderImage(MainLogo2)
	}

	const handleLogoReset = () => {
		setHeaderImage(MainLogo1)
	}
	return (
		<>
			<HeaderLogo
				on
				src={headerImage}
				onMouseEnter={handleLogoChange}
				onMouseLeave={handleLogoReset}
				onClick={() => navigate('/')}
			/>
		</>
	)
}

export default HeaderLogoImage

const HeaderLogo = styled.img`
	width: 75px;
	height: 20px;
	margin-top: -10px;
	padding: 0px;
`
