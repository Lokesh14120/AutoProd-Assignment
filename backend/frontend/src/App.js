import { useState, useEffect } from 'react';

import './App.css';
import DataDisplay from './Pages/DataDisplay';


function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [selectedValue4, setSelectedValue4] = useState("");
  // const [outputValue, setoutputValue] = useState(localStorage.getItem("outputValue") || "");
  const [outputValue, setoutputValue] = useState("");

  const [responses, setResponses] = useState([]);

  // useEffect(() => {

  //   localStorage.setItem("outputValue", outputValue);
  // }, [ outputValue]);

  // useEffect(() => {
  //   console.log(outputValue);
  // }, [outputValue]);


  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }




  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(5+3);
    console.log(selectedValue, selectedValue2, selectedValue3, selectedValue4);
    setoutputValue(`You are a great human`);
    try {
      const res = await fetch('http://127.0.0.1:8000/api/save_data/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({
          flavor: selectedValue,
          color: selectedValue2,
          animal: selectedValue3,
          food: selectedValue4
        }),
      });
      const data = await res.json();
      console.log('here');
      console.log(data);
    } catch (error) {
      console.error(error);
      console.log('gye bhai');
    }
  };
  const getData = async () => {

    let response = await fetch('http://127.0.0.1:8000/api/get_data/');
    let data = await response.json();
    setResponses(data);
    console.log(responses);

  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="App">
      <div className='Applogo'>
        <h1> Welcome to AutoProd</h1>
      </div>
      <div><h3>Choose among the following and we will tell something about you.</h3></div>
      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className='form-group'>
              <label>Pick your favorite flavor:</label>
              <select className='form-control' defaultValue="" onChange={(e) => setSelectedValue(e.target.value)}>
                <option value="" disabled>Select a flavor</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Pick your favorite color:</label>
              <select className='form-control' defaultValue="" onChange={(e) => setSelectedValue2(e.target.value)}>
                <option value="" disabled>Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Pick your favorite animal:</label>
              <select className='form-control' defaultValue="" onChange={(e) => setSelectedValue3(e.target.value)}>
                <option value="" disabled>Select an animal</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="bird">Bird</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Pick your favorite food:</label>
              <select className='form-control' defaultValue="" onChange={(e) => setSelectedValue4(e.target.value)}>
                <option value="" disabled>Select type of food</option>
                <option value="Vegiterian">Vegiterian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non Vegiterian">Nog Vegiterian</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <input className='form-control' type="submit" value="Submit" />
          </div>

        </form>
        <div className='output'>
          <h4>Here is something about you</h4>

          <textarea value={outputValue} />

        </div>
        <button onClick={getData}>
          Show previous reponses
        </button>
        
        <DataDisplay data={responses} />
      </div>
    </div>
  );
}

export default App;

