import styled from 'styled-components'
import { MockProductsDetail } from '../../data/faker'
import { Box, Grid } from 'grommet'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const ProductList = () => {
	// const { cartCount, setCartCount } = useCart()
	const dispatch = useDispatch()

	const handleAddCart = () => {
		dispatch({
			type: 'ADD_TO_CART',
		})
	}

	const products = MockProductsDetail(24)

	// const { setTargetProduct } = useProduct()
	const navigate = useNavigate()
	const handlePageChange = (product, id) => {
		// setTargetProduct(product)
		dispatch({
			type: 'SELECT_PRODUCT',
			payload: product,
		})
		navigate(`/detail/${id}`)
	}
	return (
		<Grid
			rows={['600px', '600px', '600px', '600px', '600px', '600px']}
			columns={['360px', '360px', '360px', '360px']}
			gap="small"
			justifyContent="between"
			pad="16px"
			areas={[
				{ name: 'box1', start: [0, 0], end: [0, 0] },
				{ name: 'box2', start: [0, 1], end: [0, 1] },
				{ name: 'box3', start: [0, 2], end: [0, 2] },
				{ name: 'box4', start: [0, 3], end: [0, 3] },
				{ name: 'box5', start: [0, 4], end: [0, 4] },
				{ name: 'box6', start: [0, 5], end: [0, 5] },
				{ name: 'box7', start: [1, 0], end: [1, 0] },
				{ name: 'box8', start: [1, 1], end: [1, 1] },
				{ name: 'box9', start: [1, 2], end: [1, 2] },
				{ name: 'box10', start: [1, 3], end: [1, 3] },
				{ name: 'box11', start: [1, 4], end: [1, 4] },
				{ name: 'box12', start: [1, 5], end: [1, 5] },
				{ name: 'box13', start: [2, 0], end: [2, 0] },
				{ name: 'box14', start: [2, 1], end: [2, 1] },
				{ name: 'box15', start: [2, 2], end: [2, 2] },
				{ name: 'box16', start: [2, 3], end: [2, 3] },
				{ name: 'box17', start: [2, 4], end: [2, 4] },
				{ name: 'box18', start: [2, 5], end: [2, 5] },
				{ name: 'box19', start: [3, 0], end: [3, 0] },
				{ name: 'box20', start: [3, 1], end: [3, 1] },
				{ name: 'box21', start: [3, 2], end: [3, 2] },
				{ name: 'box22', start: [3, 3], end: [3, 3] },
				{ name: 'box23', start: [3, 4], end: [3, 4] },
				{ name: 'box24', start: [3, 5], end: [3, 5] },
			]}
		>
			{products.map((product, i) => (
				<Box key={i} gridArea={'box' + (i + 1)} background="white">
					<div>
						<div
							onClick={() => {
								handlePageChange(product, product.id)
							}}
						>
							<div>
								<ProductImg src={product.imageURL} />
							</div>
							<ProductTop>
								<div>{product.productName}</div>
								<div>{product.price}</div>
							</ProductTop>
							<ProductBottom>{product.productDetail}</ProductBottom>
						</div>
						<div>
							<AddToBagBtn onClick={() => handleAddCart()}>
								Add to bag
							</AddToBagBtn>
						</div>
					</div>
				</Box>
			))}
		</Grid>
	)
}

export default ProductList

const ProductImg = styled.img`
	width: 359px;
	height: 449px;
`
const ProductTop = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 0 0;
	font-weight: bold;
`
const ProductBottom = styled.div`
	color: #666666;
	margin-bottom: 52px;
`
const AddToBagBtn = styled.button`
	width: 359px;
	height: 40px;
	background-color: white;
	border: none;
	border-right: 0.5px solid black;
	border-bottom: 0.5px solid black;
	:hover {
		border: 1px dashed black;
	}
`
