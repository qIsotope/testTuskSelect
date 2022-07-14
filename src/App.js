import './App.css';
import { BrandTerms } from './components/BrandTerms';
import { Terms } from './components/Terms';
import { Styles } from './components/Styles';
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const parameters = {}
function App() {
	let [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();

	if (searchParams.get('service_slug')) {
		parameters.service_slug = searchParams.get('service_slug')
	} if (searchParams.get('brand_slug')) {
		parameters.brand_slug = searchParams.get('brand_slug')
	} if (searchParams.get('style_slug')) {
		parameters.style_slug = searchParams.get('style_slug')
	}
	console.log(location.search)
	const search = async () => {
		const response = await fetch('https://onboarding.art-code.team/api/test/v1/search/parse_link' + location.search)
		const data = await response.json()
		console.log(data);
	}
	return (
		<div className="App">
			<Terms parameters={parameters} />
			<BrandTerms parameters={parameters} />
			<Styles parameters={parameters} />
			<button onClick={() => search()}>SEND</button>
		</div>
	);
}

export default App;
