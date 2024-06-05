import React from 'react'
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';
const url = 'https://react-corso-api.netlify.app/.netlify/functions/holiday';



const SingleHoliday = ({
    titolo,
    durata,
    descrizione,
    prezzo,
    img,
    next,
    prev
}) => {
    
  return (
    <div className='card bg-dark'>
      <img src={img} alt={titolo}/>
      <h5 className='p-2 text-white'>{titolo}</h5>
        <p style={
            {
                height: '100px',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }
        
        } className='p-2 text-white'>{descrizione}</p>
        <div className='d-flex justify-content-around m-2'>
            <small className='text-white'>{durata}</small>
            <h5 style={{color: 'yellow'}} >{(prezzo / 100).toFixed(2)}€</h5>
        </div>
        <div className='d-flex justify-content-between m-3'>
            <button className='button text-dark' onClick={prev}>
                <GrFormPreviousLink/>
            </button>
            <button className='button text-dark ' onClick={next}>
                <GrFormNextLink />
            </button>
        </div>
    </div>
  )
}

export default SingleHoliday
