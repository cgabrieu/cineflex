import { ReactComponent as LoadingLogo } from '../assets/loading.svg';
import styled from 'styled-components';

const Loading = () => (
	<Container>
		<LoadingLogo />
	</Container>
);

export default Loading;

const Container = styled.div`
  position: absolute;
	top: 0; bottom: 0; right: 0; left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`