import React from 'react'
import { genreItem } from "../data";
import GenreItem from "../../components/GenreItem/GenreItem";

import './Genre.css';

const Genre = () => {
  return (
    <div className='genreItem__container'>
        <div className='genreItem__wrapper'>
            <div className='genreItem__content'>
              <div className='genreItem__content--main'>
                {genreItem.map(item => (
                  <GenreItem item={item} key={item.id} />
                  ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Genre;