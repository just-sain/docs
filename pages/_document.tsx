import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

// every page must have:
// <title>PAGE TITLE</title>
// <meta name='description' content="DESCRIPTION" />

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='ru'>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1' />

					{/* <meta name='author' content='' />
					<meta name='author' content='' />

					<meta name='twitter:title' content='' />
					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:site' content='' />
					<meta name='twitter:creator' content='' />
					<meta name='twitter:image' content='' />

					<meta property='og:site_name' content='' />
					<meta name='og:title' content='' />
					<meta property='og:type' content='website' />
					<meta property='og:image' content='' />

					<link rel='apple-touch-icon' href='' />
					<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
