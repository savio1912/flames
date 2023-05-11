import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const flamesBtnHandler = () => {
    navigate("/flames");
  };
  const logoutBtnHandler = () => {};
  return (
    <div className="card">
      <div className="inner">
        <ul>
          <li className="btn-li">
            <button className="btn btn-success sbtn" onClick={flamesBtnHandler}>
              FLAMES
            </button>
          </li>
          <li className="btn-li">
            <button className="sbtn btn btn-danger" onClick={logoutBtnHandler}>
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
