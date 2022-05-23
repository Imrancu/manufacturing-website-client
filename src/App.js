import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchage/Purchase';
// import { publicRoute } from './Routes/PublicRoutes';




function App() {
  return (
      <Navbar>
        <Routes>
          {/* {
            publicRoute.map(({path, Component}, index) => <Route key={index} path={path} element={<Component/>} />)
          } */}
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/purchase' element={<Purchase/>} />
          <Route path='/blogs' element={
            <RequireAuth>
              <Blogs/>
            </RequireAuth>
          } />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Navbar>
  );
}

export default App;
