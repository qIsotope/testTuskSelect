import './App.css';
import { useSearchParams } from 'react-router-dom'
import { getExistingValues } from './utils/getExistingValues';
import { useEffect } from 'react';
import { TermsContainer } from './components/Terms/TermsContainer';
import { BrandTermsContainer } from './components/BrandTerms/BrandTermsContainer';
import { StylesContainer } from './components/Styles/StylesContainer';
const parameters = {}
function App() {

	let [searchParams] = useSearchParams();
	useEffect(() => {
		getExistingValues(parameters, searchParams)
	}, [])

	return (
		<div className="App">
			<TermsContainer parameters={parameters} />
			<BrandTermsContainer parameters={parameters} />
			<StylesContainer parameters={parameters} />
		</div>
	);
}

export default App;
