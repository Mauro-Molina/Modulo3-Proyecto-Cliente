import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";

import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Profile from "./pages/profile";

//import pages post
import PostListPage from "./pages/PostListpage";
import PostDetailsPage from "./pages/PostDetailsPage";
import EditPostPage from "./pages/EditPostPage";

//import page forom
import ForomListPage from "./pages/ForomListPage";
import ForomDetailsPage from "./pages/ForomDetailsPage.js";
import EditForomPage from "./pages/EditForomPage";
import Footer from "./components/Footer/Footer";


export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      <Routes>
        {/*routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))*/}
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/auth/login" element={<LogIn authenticate={authenticate}/>}></Route>
        <Route path="/auth/signup" element={<Signup authenticate={authenticate}/>} ></Route>
        <Route path="/profile" element={<Profile user={user}/> }></Route>
        
       {/* Routes for post */}
        <Route path="/post" element={<PostListPage />} />
        <Route path="/post/:postId" element={<PostDetailsPage />} />    
        <Route path="/post/edit/:postId" element={ <EditPostPage /> } />     

        {/** Routes for forom */}
        <Route path="/forom" element={<ForomListPage />} />
        <Route path="/forom/:foromId" element={<ForomDetailsPage />} />
        <Route path="/forom/edit/:foromId" element={ <EditForomPage /> } />
      </Routes>
      <Footer/>
    </div>
  );
}
