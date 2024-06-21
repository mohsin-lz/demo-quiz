import { SignInButton, SignOutButton, SignedIn } from "@clerk/clerk-react";
import "./Home.css"

const Home = () => {
    
    return <div>
        
        <h2>Welcome to Quiz Game</h2>
        
        <br />
        <br />

        
        <div className="sign-btn">
            <SignInButton mode="modal" fallbackRedirectUrl={'/dashboard'}>
                <button>Start</button>
            </SignInButton>
        </div>   
        


        </div>;
    
};

export default Home;