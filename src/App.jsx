import Home from "./Home";
import Dashboard from "./Dashboard";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { RedirectToSignIn, SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";
import Quiz from "./components/Quiz/Quiz";
import MediumQuiz from "./components/Quiz/MediumQuiz";
import DifficultQuiz from "./components/Quiz/DifficultQuiz";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="/dashboard" element={<>
        
          <SignedIn>
            <Dashboard />
          </SignedIn>

          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
      </>} />

      <Route path="/easyquiz" element={<Quiz />} />
      <Route path="/mediumquiz" element={<MediumQuiz />} />
      <Route path="/difficultquiz" element={<DifficultQuiz />} />
    </>
  )
);



function App() {
  return (
    <>
      {/* <h1>test</h1> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
