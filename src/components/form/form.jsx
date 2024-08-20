import React from 'react';
import './form.css'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import flashcardList from '../form'

export default function Form(){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

  const handleQuestion = (event) => {
    const value = event.target.value;
    setQuestion(value)
  }

  const handleAnswer = (event) => {
    const value = event.target.value;
    setAnswer(value)
  }

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ question, answer });

    let newCard = ({question, answer})
    flashcardList.push(newCard)
    console.log(flashcardList)
  }

    return(
            <>
            <form onSubmit={handleSubmit}>
            <label>Question:
                <input 
                type="text" 
                name="question" 
                value={question}
                onChange={(event) => handleQuestion(event)}
                />
                </label>
                <br></br>
                <label>Answer:
                <input 
                type="text" 
                name="answer" 
                value={answer}
                onChange={(event) => handleAnswer(event)}
                />
                </label>
                <br></br>
                <button type="submit" value="Add">Add</button>
            </form>
            </>
        )
}