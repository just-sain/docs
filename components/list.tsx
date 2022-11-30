import styled from '@emotion/styled';

export const List = styled.ul`
	display: grid;
	gap: 1rem;

	h6 {
		color: rgb(var(--light-gray));
		text-transform: uppercase;
		font-size: 1.4rem;
	}

	li {
		color: rgb(var(--white));
		font-size: 1.6rem;
	}

	a {
		text-decoration: underline;
	}
`;
