import styled from 'styled-components';
import { ReactComponent as LoadingLogo } from '../assets/icons/loading.svg';
import { ContainerCenter } from '../assets/styles/styles';

const Loading = () => (
	<ContainerCenter>
		<LoadingAnimation />
	</ContainerCenter>
);

const LoadingAnimation = styled(LoadingLogo)`
	animation: opacity .5s;
`;

export default Loading;