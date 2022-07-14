import './App.css';
import { BrandTerms } from './redux/components/BrandTerms';
import { Terms } from './redux/components/Terms';
import { Styles } from './redux/components/Styles';
import { useSearchParams } from 'react-router-dom'

function App() {
	let [searchParams, setSearchParams] = useSearchParams();
	const parameters = {}
	if (searchParams.get('service_slug')) {
		parameters.service_slug = searchParams.get('service_slug')
	} else if (searchParams.get('brand_slug')) {
		parameters.brand_slug = searchParams.get('brand_slug')
	} else if (searchParams.get('style_slug')) {
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
