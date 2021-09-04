import { ReactComponent as ErrorLogo } from '../assets/error.svg';
import { ContainerCenter } from '../styles';

const Error = () => (
	<ContainerCenter>
		<ErrorLogo />
		<br />
		<h2>Algo deu errado! Escolha outro filme.</h2>
	</ContainerCenter>
);

export default Error;

