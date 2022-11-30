import styled from '@emotion/styled';

interface IContainerProps {
	maxW: 'l' | 'm' | 's';
}

export const Container = styled('div')<IContainerProps>`
	max-width: var(--container-${({ maxW }) => maxW ?? `s`});
	width: 100%;
	margin: 0 auto;

	@media screen and (max-width: 1${({ maxW }) => (maxW === 'l' ? `4` : maxW === 'm' ? `2` : `0`)}50px) {
		padding: 0 0.5rem;
	}
`;
