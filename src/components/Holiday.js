import React , {useState, useEffect} from 'react';
import axios from 'axios';
import SingleHoliday from './SingleHoliday';
const url = 'https://react-corso-api.netlify.app/.netlify/functions/holiday';

const Holiday = () => {

const [data, setData] = useState([]);
const [selected, setSelected] = useState(0);

//funzione per scegliere vacanza tramite button
const nextHoliday = () => {
    setSelected(prevValue => {
        if(prevValue === data.data.length - 1){
            return 0;
        } else {
            return prevValue + 1;
        }
    });
}

const prevHoliday = () => {
    setSelected(prevValue => {
        if(prevValue === 0){
            return data.data.length - 1;
        } else {
            return prevValue - 1;
        }
    });
};

//funzione per fetch dati
const getData = async () => {
    try {
        const response = await axios.get(url);
        setData(response.data);
    } catch (error) {
        console.error('errore', error);
    }
}

//NB ricordare di inserire il secondo parametro vuoto per evitare loop infinito
//e di inserire la funzione getData() dentro useEffect
useEffect(() => {
    getData();
},[]);

if(data.success){
    return (
        <>
            {
                data.data.length > 0 ? <SingleHoliday {...data.data[selected]} next={nextHoliday} prev={prevHoliday}/> : <h2>Non ci sono vacanze</h2>
            } 
        </>
    );
  
}else {
    return <h2>Caricamento...</h2>
}

  return (
    <div className='mt-5'>
      Vacanza
    </div>
  )
}

export default Holiday
