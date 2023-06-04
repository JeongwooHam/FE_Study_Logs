import styled from 'styled-components'
import ProductList from '../../components/product-list'

const Skincare = () => {
	return (
		<ContentsBox>
			<ListTop>SKINCARE</ListTop>
			<ProductList />
		</ContentsBox>
	)
}

export default Skincare

const ContentsBox = styled.div`
	margin-top: -400px;
	width: 100%;
	z-index: -1;
	font-size: 14px;
`
const ListTop = styled.div`
	background-color: #f7f7f7;
	width: 100%;
	height: 50px;
	text-align: center;
	font-size: 25px;
	line-height: 50px;
	font-weight: bold;
	color: darkgray;
`
