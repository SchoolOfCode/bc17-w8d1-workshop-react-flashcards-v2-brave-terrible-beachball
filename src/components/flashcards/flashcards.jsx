import React from 'react';
import Flashcard from "./flashcard/flashcard.jsx"






export default function Flashcards(){
  const flashcardList = [{question:"QUESTION ONE" ,answer:"ANSWER ONE"}, {question:"QUESTION TWO" ,answer:"ANSWER TWO"}]

    

    return (
        <>
        <div className='flashcardContainer'>
                {flashcardList.map((flashcard) => (
      <div className="flashcard-preview" key={flashcard.id}>
        <h1>🤔</h1>
        <p>{ flashcard.question }</p>
        <p>{ flashcard.answer }</p>
        </div>
        ))}

  </div>
   </> )
}