import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import Skincare from './skincare'
import Makeup from './makeup'
import Body from './body'
import Fragrance from './fragrance'
import Sets from './sets'

const ProductDetailPage = () => {
	const navigate = useNavigate()
	const params = useParams()
	console.log(params.category)
	return (
		<>
			<Container>상품 목록 페이지입니다.</Container>
			{params.category === 'skincare' && <Skincare />}
			{params.category === 'makeup' && <Makeup />}
			{params.category === 'body' && <Body />}
			{params.category === 'fragrance' && <Fragrance />}
			{params.category === 'sets' && <Sets />}
		</>
	)
}

export default ProductDetailPage

const Container = styled.div`
	height: 500px;
`
