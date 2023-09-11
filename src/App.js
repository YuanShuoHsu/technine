import { Suspense } from 'react';
import './App.css';

import { Routes, Route, Navigate } from "react-router-dom"

import Home from './pages/Home';
import Profile from './pages/Profile';

import PrivateRoute from "./components/PrivateRoute"

import { useSelector } from 'react-redux';

function App() {

  const login = useSelector(state => state.login.value);

  return (
    <Suspense fallback="loading">
      <div className="App">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="profile">
            <Route path="" element={
              <PrivateRoute isAuthenticated={login}>
                <Profile />
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate replace to="" />} />
          </Route>
          <Route path="*" element={<Navigate replace to="" />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
