import { useState } from 'react'
import './App.css'

function App() {
 const [length, setLength] = useState(8);
const [password, setpassword] = useState("");


const generatepassword = () => {
   let Charset = ""
   Charset += "ABCDEFGHIJKLMNOPQRSTVUWXYZ" 
   Charset += "abcdefghijklmnopqrstvuwxyz" 
   Charset += "0987654321" 
   Charset += "!@#$%^&*()/?" 
   let gener =""
   for (let i = 0;i < length; i++) {
    const randomIndex = Math.floor(Math.random()* Charset.length);
    gener += Charset[randomIndex];
   }
   setpassword(gener)
};
const clearall = () => {
     setpassword("")
};
const Copy = () => {
  navigator.clipboard.writeText(password)
};
  return (
    <>
     <div className="">
      <div className="container">
        <h1>Password Generator</h1>
        <div className="password">
          <label htmlFor="p">Password Length</label>
          <input type="number" id='p' value={length} 
          onChange={(e) => setLength(parseInt(e.target.value))}/>
        </div>
        <div className="generator">
          <input type="text" value={password}/>
          <button onClick={Copy}>Copy</button>
        </div>
        <div className="clear">
          <button className='btn1' onClick={generatepassword}>Generate</button>
          <button className='btn2' onClick={clearall}>clear</button>
        </div>
        <div className="credit">
          <p>&copy;Designed by THINESH</p>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
