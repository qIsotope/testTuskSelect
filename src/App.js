import './App.css';
import { BrandTerms } from './redux/components/BrandTerms';
import { Terms } from './redux/components/Terms';
import { Styles } from './redux/components/Styles';

function App() {
	const parameters = {}

	return (
		<div className="App">
			<Terms parameters={parameters} />
			<BrandTerms parameters={parameters} />
			<Styles parameters={parameters} />

		</div>
	);
}

export default App;
