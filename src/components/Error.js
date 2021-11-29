import { ReactComponent as ErrorLogo } from '../assets/error.svg';
import { ContainerCenter } from '../assets/styles/styles';

const Error = () => (
	<ContainerCenter>
		<ErrorLogo />
		<br />
		<h2>Algo deu errado!</h2>
	</ContainerCenter>
);

export default Error;

