import MainApp from './pages/MainApp'
import Stats from './pages/Stats'
import { Route, Routes } from "react-router";

const App = () => {

	return (
		<Routes>

      <Route path='/' element={ <MainApp /> } />

      <Route path='/stats' element={ <Stats/ > } />

    </Routes>
	);
};

export default App;
