import './App.css';
import { BrandTerms } from './components/BrandTerms';
import { Terms } from './components/Terms';
import { Styles } from './components/Styles';
import { useSearchParams } from 'react-router-dom'
const parameters = {}
function App() {

	let [searchParams, setSearchParams] = useSearchParams();

	if (searchParams.get('service_slug')) {
		parameters.service_slug = searchParams.get('service_slug')
	} if (searchParams.get('brand_slug')) {
		parameters.brand_slug = searchParams.get('brand_slug')
	} if (searchParams.get('style_slug')) {
		parameters.style_slug = searchParams.get('style_slug')
	}

	return (
		<div className="App">
			<Terms parameters={parameters} />
			<BrandTerms parameters={parameters} />
			<Styles parameters={parameters} />
		</div>
	);
}

export default App;
