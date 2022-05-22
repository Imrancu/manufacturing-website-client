import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { publicRoute } from './Routes/PublicRoutes';




function App() {
  return (
      <Navbar>
        <Routes>
          {
            publicRoute.map(({path, Component}, index) => <Route key={index} path={path} element={<Component/>} />)
          }
        </Routes>
      </Navbar>
  );
}

export default App;
