import { AppProps } from 'next/app';
// component
import { Global } from '@emotion/react';
import Layout from '../components/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Global
				styles={`
						:root {
							--header-height: 7rem;
							--sidebar-w: 5rem;
							--sidebar-open-w: 25rem;
							--content-top-padding: 3rem;
							--content-bottom-padding: 5rem;

							--container-l: 1440px;
							--container-m: 1240px;
							--container-s: 1040px;

							--primary: 37, 150, 190;
							--error: 235,75,75;

							--bg: 251, 254, 253;
							--darker-bg: 241, 244, 243;

							--white: 255, 250, 250;
							--black: 12, 10, 15;
							--gray: 58, 58, 58;
							--light-gray: 150, 150, 150;

							--font-family-primary: -apple-system, -apple-system,
								BlinkMacSystemFont, 'Segoe UI', Roboto,
								Oxygen, Ubuntu, Cantarell, 'Open Sans',
								'Helvetica Neue', sans-serif;

							--font-light: 300;
							--font-medium: 500;
							--font-bold: 700;
						}

						* {
							margin: 0;
							padding: 0;
							box-sizing: border-box;
						}

						html {
							font-size: 62.5%;
							font-family: var(--font-family-primary);
						}

						body {
							font-size: 1.6rem;
						}

						a, button {
							cursor: pointer;
							border: none;
							background: none;

							color: inherit;
							text-decoration: none;
						}

						ul, ol, menu, li {
							list-style: none;
						}

						input, textarea {
							background: none;
							border: none;

							color: inherit;
							font-size: inherit;
							font-weight: inherit;

							&::placeholder {
								color: inherit;
								font-size: inherit;
								font-weight: inherit;
							}
						}
					`}
			/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default MyApp;
