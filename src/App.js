import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Movies from './components/Movies';

function App() {

  const [parsedData, setParsedData] = useState([])
  console.log('data passed from app.js')

  return (
      <>
        <Homepage parsedData={parsedData} setParsedData={setParsedData}/>
        <Movies parsedData={parsedData}/>
      </>
  );
}

export default App;
