import styled from "styled-components";
import { containerBasic, flexSpaceBetween, wrapper } from "styles/common";
import { GoTriangleDown } from "react-icons/go";
import { SiGithub } from "react-icons/si";
import { RxNotionLogo } from "react-icons/rx";
import { useEffect } from "react";
import { axiosInstance } from "apis/@core";
import { useQueryClient } from "react-query";
import { useLanguage } from "context/selectedLanguage";

const Footer = () => {
	const onGoToGithub = () => {
		window.location.href =
			"https://github.com/FrontEnd-Team3/movie-trailer-project";
	};

	const onGoToNotion = () => {
		window.location.href =
			"https://gentle-tin-2c4.notion.site/Movie_Trailer_Site-44a200ab5feb4e4ea4f4644c5fc2759c";
	};

	// 언어 변경 로직
	const { selectedLanguage, setSelectedLanguage } = useLanguage();
	// 페이지 로드 시 로컬 스토리지에서 선택한 언어 값을 가져와 초기화
	useEffect(() => {
		const storedLanguage = localStorage.getItem("selectedLanguage");
		if (storedLanguage) {
			setSelectedLanguage(storedLanguage);
			// localStorage에 저장된 값으로 param을 변경하여 새로고침 시에도 결과가 유지될 수 있게 하였음
			axiosInstance.defaults.params.language = storedLanguage;
		}
	}, []);

	// console.log("lan", selectedLanguage);

	// onChange에서 받아온 값을 localStorage에 저장 + axiosInstance param의 language 값을 해당 값으로 변경
	const handleSelectLanguage = e => {
		const language = e.target.value;
		setSelectedLanguage(language);
		localStorage.setItem("selectedLanguage", language);
		axiosInstance.defaults.params.language = language;
		window.location.reload();
	};

	// 언어가 변경되면 전체 query 요청에 cache된 데이터를 무효화하여 새로 값을 불러올 수 있게 함
	console.log("lan", selectedLanguage);
	const queryClient = useQueryClient();
	useEffect(() => {
		queryClient.invalidateQueries();
	}, [selectedLanguage]);

	return (
		<S.footerWrapper>
			<S.Container>
				<div>
					<S.Ul>
						<li>
							{selectedLanguage === "ko-KR"
								? "프로젝트 소개"
								: "Project Introduction"}
						</li>
						<li>Repository</li>
						<li>Notion</li>
					</S.Ul>
					<S.Ul>
						<li>
							{selectedLanguage === "ko-KR" ? "주식회사 상영관" : "Co. Theater"}
						</li>
						<li>
							{selectedLanguage === "ko-KR"
								? "서울특별시 강남구 테헤란로 146 현익빌딩 3,4층"
								: "3rd and 4th Floor, Hyunik Building, 146, Teheran-ro, Gangnam-gu, Seoul, South Korea"}
						</li>
					</S.Ul>
					<S.Ul>
						<li>
							copyright ⓒ{" "}
							<span>
								2023 by {selectedLanguage === "ko-KR" ? "상영관" : "Theater"},
								Inc. All rights reserved.
							</span>
						</li>
					</S.Ul>
				</div>
				<S.RightSection>
					<S.SelectBox>
						<S.Select value={selectedLanguage} onChange={handleSelectLanguage}>
							<option value="ko-KR">한국어</option>
							<option value="en-US">English</option>
						</S.Select>
						<GoTriangleDown width={16} />
					</S.SelectBox>
					<S.Icons>
						<SiGithub onClick={onGoToGithub} />
						<RxNotionLogo onClick={onGoToNotion} />
					</S.Icons>
				</S.RightSection>
			</S.Container>
		</S.footerWrapper>
	);
};

export default Footer;

const footerWrapper = styled.footer`
	background-color: #1c1d1f;
	padding: 38px 0;
	color: #fff;
	${wrapper}
`;

const Container = styled.div`
	${flexSpaceBetween}
	align-items: center;
	${containerBasic}
	font-size: 14px;
	color: #a5a5a7;
	font-weight: 500;

	div > ul {
		margin-bottom: 20px;
	}

	div > ul > li {
		cursor: pointer;
	}
`;

const Ul = styled.ul`
	display: flex;

	li::after {
		content: "";
		display: inline-block;
		background: #848485;
		vertical-align: top;
		width: 2px;
		height: 14px;
		margin: 0 8px;
	}

	li:last-of-type::after {
		display: none;
	}
`;

const RightSection = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
`;

const SelectBox = styled.div`
	position: relative;

	& svg {
		position: absolute;
		top: 11px;
		right: 8px;
		color: #a5a5a7;
	}
`;

const Select = styled.select`
	color: #fff;
	background: transparent;
	appearance: none;
	padding: 4px;
	padding: 10px 40px 10px 16px;

	option {
		background: #1c1d1f;
		color: #fff;
		outline: none;
	}
`;

const Icons = styled.div`
	svg {
		width: 26px;
		height: 26px;
		color: #fff;
		margin-left: 10px;
		cursor: pointer;
	}
`;

const S = {
	footerWrapper,
	Container,
	Ul,
	SelectBox,
	Select,
	RightSection,
	Icons,
};
