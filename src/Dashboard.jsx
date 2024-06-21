import { UserButton } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";
import Quiz from "./components/Quiz/Quiz";
import { Navigate, useNavigate } from "react-router-dom";

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
    

    return (<div>
            <h1>Welcome to Dashboard, {user.firstName}</h1>
            <UserButton />

            <button onClick={gotoEasyQuizPage}>Easy</button> <br />
            <button onClick={gotoMediumQuizPage}>Medium</button> <br />
            <button onClick={gotoHardQuizPage}>Difficult</button> <br />
        </div>
        
    );
};

export default Dashboard;