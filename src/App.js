import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form.js";
import "./index.css";
import Dashboard from "./Components/Dashboard.js";
import Signup from "./Auth/Signup.js";
import Login from "./Auth/Login.js";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/flames" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </main>
      <footer className="footer">All rights reserved</footer>
    </BrowserRouter>
  );
};
export default App;
