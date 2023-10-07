import logo from './logo.svg';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
	position: relative;
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	img {
		height: 25vmin;
		pointer-events: none;
	}
`

const StyledTitle = styled.h1`
	color: black;
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 4px;
	text-align: center;
	text-transform: uppercase;
	padding-top: 4rem;
`

function App() {
	return (
		<StyledHeroSection>
			<img src={logo} className="App-logo" alt="logo"/>
			<StyledTitle>Back to smooth and firm skin</StyledTitle>
		</StyledHeroSection>
	);
}

export default App;
