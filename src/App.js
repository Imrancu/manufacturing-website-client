import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchage/Purchase';
// import { publicRoute } from './Routes/PublicRoutes';




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* {
            publicRoute.map(({path, Component}, index) => <Route key={index} path={path} element={<Component/>} />)
          } */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<AddReview />} />
          <Route path='myOrder' element={<MyOrder />} />
          <Route path='myProfile' element={<MyProfile />} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />

    </>
  );
}

export default App;
