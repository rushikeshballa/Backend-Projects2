import React from "react";
import { useState } from 'react';
import { useGetMoviesbytitleQuery, useGetMoviesQuery } from "../services/moviesApi";

function Titles() {

  var { isloding, data } = useGetMoviesQuery()
  return (
    <div className='p-3'>
      {
        data?.map((mov) => {
          return (
            <div>{mov}</div>
          )
        })
      }
    </div>
  );
}
export default Titles