import './style.css'; // Import CSS file for styling
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataComponent = () => {
  const [dataArray, setDataArray] = useState([]);
  const imageAddresses=['./Images/Gulahmed.jpg',
  './Images/Saphire.jpg',
  './Images/JunaidJumshaid.jpg',
  './Images/Khadi.jpg',
  './Images/Limelight.jpg',
  './Images/Bonanza.jpg',
  './Images/Outfitters.jpg',
  './Images/Alkaram.jpg',
  './Images/Nishat.webp',
  './Images/Safinaz.jpg',]
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
    <div className="data-container" style={{backgroundColor:'lightgrey'}}>
      {dataArray.map((item, index) => (
        <div className="data-item" key={index}>
          <h2 className="title">{item.h3Text}</h2>
          <img src={imageAddresses[index]} alt={item.h3text} className="image" />
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
