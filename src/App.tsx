import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MainAppRouter from "./router/MainAppRouter";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer/>
      <Router>
        <MainAppRouter/>
      </Router>
    </div>
  );
}

export default App;
