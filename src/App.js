import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import Results from "./components/Results"

function App() {
  const [state,setState] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password:"",
    confirmPassword:""
  });
  
  
  
  return (
    <div className="App">
     <Form inputs = {state} setInputs={setState}></Form>
     <Results data = {state}></Results>
    </div>
  );
}

export default App;
