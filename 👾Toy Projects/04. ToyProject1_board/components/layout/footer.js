import styled from 'styled-components'
import footerLogo from '../../img/footer-img.png'
import privacyChoiceLogo from '../../img/privacyoptions.png'

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FooterTop>
					<div>
						At Glossier, we make products inspired by real life.
						<br /> We believe beauty is about having fun, celebrating freedom
						and being present,
						<br />
						because no matter where you are in your beauty journey - YOU LOOK
						GOOD.
					</div>
					<div>
						<div>
							<FooterInput placeholder="Email Address" />
							<FooterButton>SUBMIT</FooterButton>
						</div>
						<Information>
							You can unsubscribe anytime. For more details, review our Privacy
							Policy.
						</Information>
					</div>
				</FooterTop>
				<FooterBottom>
					<FooterMenuList>
						<li>© 2023 Glossier. All rights reserved.</li>
						<FooterMenu>Privacy Policy</FooterMenu>
						<FooterMenu>Terms of Use</FooterMenu>
						<FooterMenu>Accessibility</FooterMenu>
						<FooterMenu>Supply Chain Transparency</FooterMenu>
						<FooterMenu>
							Your Privacy Choices
							<img src={privacyChoiceLogo} />
						</FooterMenu>
					</FooterMenuList>
					<FooterLogo src={footerLogo} />
				</FooterBottom>
			</FooterContainer>
		</>
	)
}

export default Footer

const FooterContainer = styled.div`
	background-color: #faf2f4;
	font-size: 14px;
	width: 100%;
	height: 344px;
	position: relative;
	bottom: 0;
`

const FooterTop = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 16px;
	font-weight: 300;
`

const FooterInput = styled.input`
	width: 438px;
	height: 46px;
	border: 1px lightgray solid;
	border-bottom: 1px solid black;
`
const Information = styled.div`
	font-size: 12px;
	color: gray;
	margin-top: 5px;
`

const FooterButton = styled.button`
	background-color: white;
	margin-left: 10px;
	width: 64px;
	height: 46px;
	border: 1px lightgray solid;
	border-bottom: 1px solid black;
	border-right: 1px solid black;
`
const FooterBottom = styled.div`
	display: flex;
	justify-content: space-between;
`

const FooterMenuList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
	width: 55%;
	font-weight: 300;
	margin: 15px;
	padding: 0px;
	position: absolute;
	bottom: 0;
`

const FooterLogo = styled.img`
	margin-left: 60%;
	width: 517px;
	height: 242px;
`
const FooterMenu = styled.li`
	padding: 0px;
	:hover {
		text-decoration: underline 1px;
	}
`
