import React from 'react';

const Card = ({ name, seriesLink, about, rating, description, stars, votes, year, imgsrc }) => {
  return (
    <>
      <div className='cards'>
        <div className='card'>
          <img src={imgsrc} alt='myPic' className='card__img' />
          <div className='card__info'>
            <h3 className='title'>
              <a href={seriesLink} className='link' target='_blank' rel="noreferrer"> {name}  </a>
              <span className='text_muted'>{year}</span>
            </h3>
            <p className='text_muted margin-tb'> {about}</p>
            <span className='star'>{rating}</span>
            <p className='description'>{description}</p>
            <p className='actor margin-tb'>
            {stars.length > 1 ? "Stars:" :  "Star:"}
              {
              stars.map((val,index)=> <a key={index} href={val.profileLink} target='_blank' rel="noreferrer" className='starName link'>{val.name}</a>)
              }
            </p>
            <p className='actor margin-tb'>
             Votes: <span className='votes'>{votes}</span>
            </p>
            <a href={seriesLink} target='_blank' rel="noreferrer">
              <button className='card__button '> Watch Now </button> </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Card;