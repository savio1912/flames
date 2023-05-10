import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Form.js";
import "./index.css";
import Dashboard from "./Dashboard.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/flames" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
