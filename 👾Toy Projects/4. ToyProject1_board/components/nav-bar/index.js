import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Collapse, Navbar, Nav, NavItem } from 'reactstrap'
import { useNav } from '../../context/navcontent'
import NavDetail from '../../data/navbar-data.json'

// image

import ArrowImage from '../../img/arrow.png'
import SkincareImage from '../../img/SKINCARE.jpg'
import MakeupImage from '../../img/MAKEUP.jpg'
import BodyImage from '../../img/BODY.jpg'
import FragranceImage from '../../img/FRAGRANCE.jpg'
import SetsImage from '../../img/SETS.jpg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import HeaderLogoImage from './main-logo'

const NavBar = args => {
	const [isOpen, setIsOpen] = useState(false)
	// const [selectedMenu, setSelectedMenu] = useState('SKINCARE')
	const { content, setContent, initialValue } = useNav()
	const selectedVal = useRef(content)

	// ReactStrap을 사용한 navbar > 마우스 올리면 해당 값에 맞게 내부 컨텐츠 변화하는 효과 구현
	const handleToggleOpen = e => {
		// console.log(e.target.id)
		if (NavDetail.NavMenus.find(el => el.name === e.target.id)) {
			selectedVal.current = NavDetail.NavMenus.find(
				el => el.name === e.target.id,
			)
			setContent(selectedVal.current)
		}
		setIsOpen(true)
	}

	useEffect(() => {
		if (content) {
			selectedVal.current = content
		} else {
			selectedVal.current = initialValue
		}
	}, [content])

	// 마우스가 navbar 영역을 벗어나면 닫히도록 하는 함수
	const handleToggleClose = () => {
		// setContent(initialValue)
		setIsOpen(false)
	}

	const ImageArray = [
		SkincareImage,
		MakeupImage,
		BodyImage,
		FragranceImage,
		SetsImage,
	]

	// 클릭 시 해당 상품 목록 페이지로 이동하도록 하는 함수
	const navigate = useNavigate()
	const handlePageChange = productName => {
		const targetProduct = productName.toLowerCase()
		navigate(`/product/${targetProduct}`)
	}

	// 장바구니
	// const { cartCount } = useCart()
	const cartCount = useSelector(state => state.cart)

	return (
		<Container>
			<Navbar {...args}>
				<HeaderLogoImage />
				<CenterMenuList>
					<EachMenu onMouseEnter={handleToggleOpen} id="SKINCARE">
						SKINCARE
					</EachMenu>
					<EachMenu onMouseEnter={handleToggleOpen} id="MAKEUP">
						MAKEUP
					</EachMenu>
					<EachMenu onMouseEnter={handleToggleOpen} id="BODY">
						BODY
					</EachMenu>
					<EachMenu onMouseEnter={handleToggleOpen} id="FRAGRANCE">
						FRAGRANCE
					</EachMenu>
					<EachMenu onMouseEnter={handleToggleOpen} id="SETS">
						SETS
					</EachMenu>
				</CenterMenuList>
				<HeaderBottom>
					<HeaderMenuList>
						<li>
							<HeaderButton>SEARCH</HeaderButton>
						</li>
						<li>
							<HeaderButton>LOG IN</HeaderButton>
						</li>
						{/* 장바구니에 담긴 수는 나중에 전역 변수 생성하고 추가하기 */}
						<li>
							<HeaderButton>BAG({cartCount})</HeaderButton>
						</li>
					</HeaderMenuList>
				</HeaderBottom>
				<Collapse isOpen={isOpen} navbar>
					<Nav
						className="me-auto"
						navbar
						onMouseEnter={handleToggleOpen}
						onMouseLeave={handleToggleClose}
					>
						<NavContainer>
							<NavItem>
								<NavContents>
									<p>Shop All</p>
									<p>Bestsellers</p>
								</NavContents>
								<NavContents>
									<p style={{ color: 'blue' }}>NEW</p>
									<p>G Suit</p>
									<p>You Look Good Cap</p>
								</NavContents>
							</NavItem>
							<NavItem
								onClick={() => handlePageChange(selectedVal.current.name)}
							>
								{/* <OneNav selectedMenu={selectedMenu} /> */}
								<OneContainer>
									<Lists>
										{selectedVal.current.menulist.map((menu, i) => (
											<List key={i}>{menu}</List>
										))}
									</Lists>
									<div>
										<NavImage src={ImageArray[selectedVal.current.id]} />
										<NavImageInfo>
											{selectedVal.current.imageDescription}
											<Arrow src={ArrowImage} />
										</NavImageInfo>
									</div>
								</OneContainer>
							</NavItem>
						</NavContainer>
					</Nav>
				</Collapse>
			</Navbar>
		</Container>
	)
}

export default NavBar

const Container = styled.div`
	background-color: white;
	z-index: 100;
`

const HeaderBottom = styled.div`
	display: flex;
	justify-content: space-between;
`

const CenterMenuList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-evenly;
	width: 400px;
	font-size: 12px;
	padding: 0;
	margin-bottom: 5px;
`
const EachMenu = styled.li`
	:hover {
		text-decoration: underline 1px;
	}
`

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`

const NavContents = styled.div`
	font-size: 15px;
	line-height: 5px;
	margin-bottom: 50px;
	font-weight: 300;
	letter-spacing: -0.5px;
`

const HeaderMenuList = styled.ul`
	font-size: 12px;
	list-style: none;
	width: 200px;
	display: flex;
	justify-content: space-evenly;
	margin-right: 10px;
	margin-bottom: 5px;
`

const HeaderButton = styled.button`
	background-color: white;
	border: none;
	font-size: 12px;
	width: 55px;
	:hover {
		text-decoration: underline 1px;
	}
`
//

const OneContainer = styled.div`
	display: flex;
`

const Lists = styled.ul`
	width: 800px;
	list-style: none;
	font-size: 15px;

	font-weight: 300;
`

const List = styled.li`
	:hover {
		text-decoration: underline 0.5px;
	}
`

const NavImage = styled.img`
	width: 221px;
	height: 276px;
`

const NavImageInfo = styled.p`
	margin-top: 10px;
	font-size: 14px;
	:hover {
		text-decoration: underline 0.5px;
	}
`

const Arrow = styled.img`
	position: absolute;
	right: 30px;
	width: 15px;
	height: 15px;
`
