import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Admin from './components/Admin/Admin';
import ChangePassword from './components/Admin/ChangePassword/ChangePassword';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Profile from './components/Admin/Profile/Profile';
import Staff from './components/Admin/Staff/Staff';
import Student from './components/Admin/Student/Student';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/Pages/About/About";
import Blog from "./components/Pages/Blog/Blog";
import SingleBlog from './components/Pages/Blog/SingleBlog/SingleBlog';
import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import Shop from "./components/Pages/Shop/Shop";
import SingleProduct from "./components/Pages/Shop/SingleProduct/SingleProduct";
import Team from "./components/Pages/Team/Team";


function App() {

  const [progress, setProgress] = useState([]);

  return (
    <>
      <BrowserRouter>

        <LoadingBar 
          color="#08c"
          progress={100}
          onLoaderFinished={() => setProgress(0)}
          loaderSpeed={500}
          transitionTime={300}
        />

        <Header></Header>

        
        <Routes>
          
          <Route path="/" element={ <Home></Home> } />
          <Route path="/about" element={ <About></About> } />
          <Route path="/blog" element={ <Blog></Blog> } />
          <Route path="/blog/single" element={ <SingleBlog></SingleBlog> } />
          <Route path="/shop" element={ <Shop></Shop> } />
          <Route path="/shop/:productId" element={ <SingleProduct></SingleProduct> } />
          <Route path="/contact" element={ <Contact></Contact> } />
          <Route path="/team" element={ <Team></Team> } />

          <Route path="/dashboard" element={ <Admin></Admin> }>
            <Route path="/dashboard" element={ <Dashboard></Dashboard> } />
            <Route path="/dashboard/profile" element={ <Profile></Profile> } />
            <Route path="/dashboard/password-change" element={ <ChangePassword></ChangePassword> } />
            <Route path="/dashboard/student" element={ <Student></Student> } />
            <Route path="/dashboard/staff" element={ <Staff></Staff> } />
          </Route>

          <Route path="/*" element={ <NotFound></NotFound> } />
        
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
