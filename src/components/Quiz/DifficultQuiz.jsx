import React, { useRef, useState } from 'react'
import './DifficultQuiz.css'

//Importing Questions file here
import { data } from '../../assets/DiffQuizData';



// Generating questions from data.js usind useState hooks
const DifficultQuiz = () => {

// Set the index 0 means question starting from 1
    let [index,setIndex] = useState(0);
    let [question,setQuestion] = useState(data[index]);

// Lock state to lock only one option at a time. Diable multiple selection
    let [lock,setLock] = useState(false);

// Setting Score 
    let [score,setScore] = useState(0);

// Displaying Result
    let [result,setResult] = useState(false);

// Functionality for highlighting the correct option after selecting wrong one.
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let optionArray = [Option1,Option2,Option3,Option4];

// Functionality for marking and locking only one Option at a time using arrow function
    const checkAns = (e,ans) => {

        if (lock === false) {

            // checking if answer selected is correct ot not
            if (question.ans===ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev=>prev+1);
            } 
            else{
                e.target.classList.add("wrong");
                setLock(true);
                optionArray[question.ans-1].current.classList.add("correct");
            }
        }
    }

// Next Button Functionality to change the question

    const next = ()=> {
    //displaying result
    if (lock === true) {
        if (index === data.length -1) {
            setResult(true);
            return 0;
        }
    }

    //if option is selected, then the next button will enable. Otherwise it'll stay inactive
        if (lock===true) {
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);

        // removing any selection option in next question
            optionArray.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

// Resetting the game after final question
    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

  return (
    <div className='container'>
      <h1>Difficult Quiz</h1>
      <hr />

      {result?<></>:<>
      <h2>{index+1}. {question.question}</h2>
      <ul>
        {/* using checkAns method and passing its value to determine whether option is correct or not! */}
        {/* Using references to highlist the correct option when user choses wrong answer */}
        <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>

      </ul>

        <button onClick={next}>Next</button>
        <div className="index">{index+1} of {data.length} questions</div>
      </>}
        {result?<><h2>You Scored : {score} out of {data.length}</h2>
        <button onClick={reset}>Reset</button>
        </>:<></>}
        
    </div>
  )
}

export default DifficultQuiz
