import './style.css'; // Import CSS file for styling
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataComponent = () => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.18.17:3001/get-scrapped-data');
        setDataArray(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  return (
    <div className="data-container">
      {dataArray.map((item, index) => (
        <div className="data-item" key={index}>
          <h2 className="title">{item.h3Text}</h2>
          <img src={item.imgSrc} alt={item.h3text} className="image" />
          <ul className="points">
            {item.liTexts.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DataComponent;
