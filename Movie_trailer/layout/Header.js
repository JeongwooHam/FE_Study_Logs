import styled from "styled-components";
import {
	containerBasic,
	flexSpaceBetween,
	flexalignItemCenter,
	wrapper,
} from "styles/common";
import { BiCameraMovie } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SearchBar from "components/searchbar";
import { useLanguage } from "context/selectedLanguage";

const Header = () => {
	const navigate = useNavigate();
	const onGoPage = endpoint => {
		navigate(`movies/${endpoint}`);
		window.location.reload();
	};
	const { selectedLanguage } = useLanguage();
	return (
		<S.Wrapper>
			<S.Container>
				<S.LogoNavBar>
					<S.Logo onClick={() => onGoPage("popular")}>
						<BiCameraMovie size={22} />
						<S.LogoSpan>movie</S.LogoSpan>
						<S.LogoTitle>
							{selectedLanguage === "ko-KR" ? "상영관" : "THEATER"}
						</S.LogoTitle>
					</S.Logo>
					<S.NavBar>
						<li onClick={() => onGoPage("now-playing")}>
							{selectedLanguage === "ko-KR" ? "상영작" : "Now-Playing"}
						</li>
						<li onClick={() => onGoPage("upcoming")}>
							{selectedLanguage === "ko-KR" ? "개봉작" : "Upcoming"}
						</li>
						<li onClick={() => onGoPage("top-rated")}>
							{selectedLanguage === "ko-KR" ? "영화랭크" : "Top-Rated"}
						</li>
					</S.NavBar>
				</S.LogoNavBar>
				<S.SearchAvatar>
					<SearchBar />
					<S.Value>
						{selectedLanguage === "ko-KR" ? "평가하기" : "Rate It"}
					</S.Value>
					<S.Avatar>
						<span>H</span>
					</S.Avatar>
				</S.SearchAvatar>
			</S.Container>
		</S.Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	${wrapper}
	box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
`;

const Container = styled.div`
	${flexSpaceBetween}
	align-items: center;
	${containerBasic}
	height: 64px;
`;

const LogoNavBar = styled.div`
	display: flex;
`;

const Logo = styled.div`
	${flexalignItemCenter}
	cursor: pointer;
`;

const LogoSpan = styled.span`
	font-weight: bold;
	padding: 10px;
`;

const LogoTitle = styled.h1`
	font-weight: bold;
	font-size: ${({ theme }) => theme.FONT_SIZE.title};
	margin-right: 20px;
`;

const NavBar = styled.ul`
	${flexalignItemCenter}

	li {
		color: ${({ theme }) => theme.PALETTE.primary["400"]};
		font-weight: 500;
		font-size: 15px;
		padding: 10px;
		cursor: pointer;
		transition: all 0.2s linear;

		:hover {
			color: #000;
			font-weight: bold;
		}
	}
`;

const SearchAvatar = styled.div`
	${flexalignItemCenter}
`;

const Value = styled.p`
	margin: 20px;
	font-size: 13px;
	color: #262626;
	cursor: pointer;
`;

const Avatar = styled.div`
	width: 28px;
	height: 28px;
	border-radius: 50%;
	background-color: #673ab7;
	line-height: 30px;
	text-align: center;
	cursor: pointer;

	span {
		font-weight: bold;
		color: #fff;
	}
`;

const S = {
	Wrapper,
	Container,
	LogoNavBar,
	Logo,
	NavBar,
	LogoSpan,
	LogoTitle,
	SearchAvatar,
	Value,
	Avatar,
};
