import React from 'react';
import Flashcard from "./flashcard/flashcard.jsx"

export default function Flashcards(){

    const flashcardList = [{question:"hdwjeowei" ,answer:"hdahiuha"}, {question:"hdwjeowei" ,answer:"hdahiuha"}]
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