import React from 'react';

export default function Form(){
        return(
            <>
            <form>
                <label for="question">Question:</label>
                <input type="text" id="question" name="question"></input><br></br>

                <label for="answer">Answer:</label>
                <input type="text" id="answer" name="answer"></input><br></br>

                <input type="submit" value="Add"></input>



            </form>
            </>
        )
}