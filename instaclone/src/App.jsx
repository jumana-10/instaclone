//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home'
import Auth from './Authentication/Auth';
import "./Components/Home.css"
import "./App.css"
import { useState, useEffect } from 'react';
import { auth } from './Firebase/Firebase';

import Search from './Side Component/Search';
import Explore from './Side Component/Explore';
import Reels from './Side Component/Reels';
import Message from './Side Component/Message';
import Notification from './Side Component/Notification';
import Create from './Side Component/Create';
import More from './Side Component/More';

function App() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <>
                  <Home user={user} />
                  </>
                ) : (
                  <Auth Signup={false} />
                )
              }
            />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/create" element={<Create />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/message" element={<Message />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}


export default App;
