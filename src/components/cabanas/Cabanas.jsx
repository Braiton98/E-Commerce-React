import React, { useEffect, useState } from 'react';
import './Cabanas.css';

function Cabanas() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data/cabanas.json');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);


  return (
    <>
    <h2>Las cabañas</h2>
      <div className='myCard'>
        {data.map((item, index) => (
          <div key={index}>
            <div className="card">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.info}</p>
                <a href="#" className="btn btn-primary">Elegir</a>
                <p className='btn bg-info'>{item.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cabanas