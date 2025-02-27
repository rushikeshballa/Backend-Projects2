import React from "react";
import { useState } from 'react';
import { useGetMoviesbytitleQuery, useGetMoviesQuery } from "../services/moviesApi";
import { Link } from "react-router-dom";

function Titles() {

  var { isloding, data } = useGetMoviesQuery()
  return (
    <div className='p-3'>
      {
        data?.map((mov) => {
          return (
            <Link to={`/movie/${mov}`} style={{all:"unset"}}>
            <div>{mov}</div>
            </Link>
          )
        })
      }
    </div>
  );
}
export default Titles