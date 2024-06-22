import { UserButton } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";
import Quiz from "./components/Quiz/Quiz";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./Dashboard.css"

const Dashboard = () => {

    const { user } = useClerk();
    const navigate = useNavigate();

    const gotoEasyQuizPage=()=>{
        navigate("/easyquiz");
      }
      
    const gotoMediumQuizPage=()=>{
        navigate("/mediumquiz");
      }

    const gotoHardQuizPage=()=>{
        navigate("/difficultquiz");
      }      
    

    return (
          
      <div className="btn-container">

            <Navbar />
            {/* <h1>Welcome to Dashboard, {user.firstName}</h1>
            <UserButton /> */}
          <ul className="btn-list">
            <button onClick={gotoEasyQuizPage}>Easy</button> <br />
            <button onClick={gotoMediumQuizPage}>Medium</button> <br />
            <button onClick={gotoHardQuizPage}>Difficult</button> <br />
            </ul>
        </div>
        
    );
};

export default Dashboard;