import styled from 'styled-components';
import { ReactComponent as LoadingLogo } from '../assets/icons/loading.svg';
import { ContainerCenter } from '../assets/styles/styles';

const Loading = () => (
	<ContainerCenter>
		<LoadingAnimation />
	</ContainerCenter>
);

const LoadingAnimation = styled(LoadingLogo)`
	animation: opacityScale .5s;
	width: 130px;
`;

export default Loading;