import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form.js";
import "./index.css";
import Dashboard from "./Components/Dashboard.js";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/flames" element={<Form />} />
          {/* <Route
            path="/result"
            element={
              <Flames name1={n1.toLowerCase()} name2={n2.toLowerCase()} />
            }
          /> */}
        </Routes>
      </main>
      <footer className="footer">All rights reserved</footer>
    </BrowserRouter>
  );
};
export default App;
