import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      setMessage(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
