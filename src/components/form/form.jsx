import React from 'react';
import './form.css'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function Form(){
    
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

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