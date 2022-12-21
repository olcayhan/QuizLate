import Card from "./components/Card";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthScreen from "./components/AuthScreen";

export default function App() {

  return (
    <>

      <Router>
        <Routes>

          <Route path="/" element={<AuthScreen />} />
          <Route path="/card" element={<Card />} />


        </Routes>

      </Router>


    </>



  );
}

