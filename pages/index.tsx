import { css } from '@emotion/css';
import { format } from 'date-fns';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>ASPC Docs - </title>
			</Head>
			<section>
				<h1
					className={css`
						color: rgb(var(--black));

						span {
							color: rgb(var(--primary));
							font-weight: 400;

							b {
								font-weight: 800;
							}

							i {
								font-weight: 600;
							}
						}
					`}>
					ASPC Docs
					<br />
					для подготовки к{' '}
					<span>
						world<b>skills</b> <i>{format(new Date(), 'yyyy')}</i>
					</span>
				</h1>
				<div
					className={css`
						margin-top: 0.5rem;
						overflow: hidden;
						border-radius: 2.5rem;

						img {
							width: 100%;
							height: auto;
						}
					`}>
					<img src='https://worldskills2019.com/application/files/3415/6694/0325/FTV_2333.JPG' alt='' />
				</div>
			</section>
		</>
	);
}
