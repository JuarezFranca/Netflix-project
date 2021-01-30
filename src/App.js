import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() =>{
    const loadALL = async () => {
      //pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      console.log(list)
      setMovieList(list);
    }
    loadALL();
  }, [])

  return (
    <div className="page">
      <section className='lists'>
        {movieList.map((item, key) => (
          <div>
            {item.title}
          </div>
        ))}
      </section>

    </div>
  )
}