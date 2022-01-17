import React,{useState} from 'react'
import axios from 'axios'
import './App.css';


function App() {
 
  const[image,setImage]=useState('');

  const handleChange=()=>{
    // const key=process.env.REACT_APP_API_KEY;
    // console.log(key);
    axios.get(
      `https://api.generated.photos/api/v1/faces?api_key=${process.env.REACT_APP_API_KEY}&order_by=random`
      
    ).then(res =>{
      const url= res.data.faces[0].urls[4][512];
      url && setImage(url);
    }).catch(err =>{
      console.log(err.message);
    })
  }


  return (
    <div className="App">

      <h1>AI Photo Generator</h1>
      {image && <img src={image} />}
      <div > <button type="button" onClick={handleChange}>CHANGE IMAGE</button>
      </div>
     
    </div>
  );
}

export default App;


