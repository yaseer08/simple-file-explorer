//styles
import './App.css';
//component imports
import BreadCrumbs from '../BreadCrumbs';
import MainContent from '../MainContent';
import SideBar from '../SideBar';

function App() {


	return (
		<div className="App">
			<SideBar />
			<div className="Content">
				<BreadCrumbs />
				<MainContent />
			</div>
		</div>
	);
}


export default App;
