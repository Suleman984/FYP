import './style.css'; // Import CSS file for styling
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';

const DataComponent = () => {
  const [dataArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const imageAddresses = [
    './Images/Gulahmed.jpg',
    './Images/Saphire.jpg',
    './Images/JunaidJumshaid.jpg',
    './Images/Khadi.jpg',
    './Images/Limelight.jpg',
    './Images/Bonanza.jpg',
    './Images/Outfitters.jpg',
    './Images/Alkaram.jpg',
    './Images/Nishat.webp',
    './Images/Safinaz.jpg',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://192.168.43.229:3001/get-scrapped-data');
        setDataArray(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="data-container" style={{ backgroundColor: 'lightgrey' }}>
      {loading ? (
        <div className="loader-container">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="loading"
          />
        </div>
      ) : (
        dataArray.map((item, index) => (
          <div className="data-item" key={index}>
            <h2 className="title">{item.h3Text}</h2>
            <img src={imageAddresses[index]} alt={item.h3text} className="image" />
            <ul className="points">
              {item.liTexts.map((text, idx) => (
                <li key={idx}>{text}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default DataComponent;
