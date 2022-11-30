import { ReactNode, useState } from 'react';
// components
import { MdCable, MdCameraAlt, MdWeb } from 'react-icons/md';
import { GiPencilBrush } from 'react-icons/gi';
import { Container } from './container';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import Link from 'next/link';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr auto;
`;

// sidebar
interface IIsMenuOpen {
	isMenuOpen: boolean;
}

const SideBar = styled.aside<IIsMenuOpen>`
	width: var(--${({ isMenuOpen }) => (!isMenuOpen ? `sidebar-w` : `sidebar-open-w`)});
	height: 100%;
	padding: var(--content-top-padding) 0 0 1rem;
	z-index: 100;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	gap: 2rem;

	background: rgb(var(--primary));

	position: fixed;
	top: 0;
	left: 1;

	transition: width 0.4s ease 0s;
`;

const Navigation = styled.nav<IIsMenuOpen>`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	gap: 1.5rem;

	li {
		width: 100%;

		background: rgba(var(--black), 0);
		border-radius: 2rem;

		position: relative;
		left: 0;

		transition: left 0.3s ease 0s, background 0.3s ease 0s;

		${({ isMenuOpen }) =>
			isMenuOpen &&
			`
			&:hover {
				left: 1rem;
				background: rgba(var(--black), 0.2);
		}`}

		a {
			width: 100%;

			.icon {
				width: 3rem;
				height: auto;

				border-radius: 50%;
				background: rgba(var(--black), 0);

				color: rgb(var(--white));

				transition: background 0.3s ease 0s;

				${({ isMenuOpen }) =>
					!isMenuOpen &&
					`&:hover {
					background: rgba(var(--black), 0.3);
				}`}
			}

			span {
				width: calc(var(--sidebar-open-w) - 1rem - 4rem);
				height: 100%;
				opacity: ${({ isMenuOpen }) => (isMenuOpen ? `1` : `0`)};

				color: rgb(var(--white));
				line-height: 1.5rem;
				font-size: 1.6rem;
				font-weight: 600;

				position: absolute;
				top: 25%;
				left: 4rem;

				transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? `0` : `100`)}%);
				transition: transform 0.3s ease 0.1s, opacity 0.6s ease 0s;
			}
		}
	}
`;

const BurgerMenu = styled.div<IIsMenuOpen>`
	width: 3rem;
	height: 2rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;

	cursor: pointer;

	div {
		width: 100%;
		height: 0.2rem;
		background: rgb(var(--white));
		border-radius: 1.5rem;
		transform: rotate(0);
		transition: opacity 0.4s ease 0s, background 0.4s ease 0s, transform 0.4s ease 0s, width 0.4s ease 0s;
		${props =>
			props.isMenuOpen &&
			`
			&:first-of-type {
				transform: rotate(45deg) translate(1rem, .1rem);
			}
			&:nth-of-type(2) {
				transform: rotate(-45deg) translate(.6rem, .3rem);
			}
			&:last-of-type { opacity: 0; }
		`}
	}

	&:hover div {
		&:first-of-type {
			width: 80%;
		}
		&:last-of-type {
			width: 40%;
		}
	}
`;

// Main
const Main = styled.main`
	max-width: calc(var(--container-m) + var(--sidebar-w));
	width: 100%;
	margin: 0 auto;
	padding: var(--content-top-padding) 0 var(--content-bottom-padding) var(--sidebar-w);

	@media screen and (max-width: 1250px) {
		padding: var(--content-top-padding) 1rem var(--content-bottom-padding);
	}
`;

// footer
const Footer = styled.footer`
	padding: 1rem 0;
	z-index: 121;

	background: rgb(var(--black));
	color: rgb(var(--white));
`;

// interface
interface ILayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	return (
		<Wrapper>
			<SideBar
				isMenuOpen={isMenuOpen}
				onMouseEnter={() => setIsMenuOpen(true)}
				onMouseLeave={() => setIsMenuOpen(false)}>
				{/* <BurgerMenu isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<div />
					<div />
					<div />
				</BurgerMenu> */}
				<Navigation isMenuOpen={isMenuOpen}>
					<li>
						<Link href={'#'}>
							<MdCable className='icon' /> <span>ИКС</span>
						</Link>
					</li>
					<li>
						<Link href={'#'}>
							<MdCameraAlt className='icon' /> <span>Фотография</span>
						</Link>
					</li>
					<li>
						<Link href={'#'}>
							<MdWeb className='icon' /> <span>Веб Технология</span>
						</Link>
					</li>
					<li>
						<Link href={'#'}>
							<GiPencilBrush className='icon' /> <span>3D моделирование</span>
						</Link>
					</li>
				</Navigation>
			</SideBar>
			<Main>{children}</Main>
			<Footer>
				<Container
					maxW='l'
					className={css`
						display: flex;
						justify-content: space-between;
						align-items: center;
					`}>
					<span>by just.sain</span>
					<span>© ASPC docs</span>
				</Container>
			</Footer>
		</Wrapper>
	);
};

export default Layout;
