import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Home/Portfolio/Portfolio';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';




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
        <Route path='/portfolio' element={<Portfolio />} />
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
          <Route path="myProfile" element={<MyProfile />} />
          <Route path='addReview' element={<AddReview />} />
          <Route path='myOrder' element={<MyOrder />} />
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>} />
          <Route path='manageOrders' element={
            <RequireAdmin>
              <ManageOrders />
            </RequireAdmin>} />
          <Route path='manageProducts' element={
            <RequireAdmin>
              <ManageProducts />
            </RequireAdmin>} />
          <Route path='addProduct' element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />

    </>
  );
}

export default App;
