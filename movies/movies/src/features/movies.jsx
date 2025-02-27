import React from "react";
import { useGetAllMoviesQuery } from "../services/moviesApi";
import { Link } from "react-router-dom";


const Movies = (() => {
    const { isloding, data } = useGetAllMoviesQuery();
    console.log(data);
    
    
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 mx-2 p-4 d-flex justify-content-around">
            
            
            {
                data?.map((movie) => {
                    return <Link to={`/movie/${movie.Title}`} style={{all:"unset"}}>
                    <div  className="card mx-3" style={{ width: "18rem", height: "500px", padding: "0px" }}>
                        <img src={movie.Poster} className="card-img-top h-75 rounded-2 " alt="..." />
                        <div className="card-body p-1" >
                            <p className="card-text">
                                <div className="fs-4 text-center">{movie.Title}</div>
                                <div className="fs" style={{ fontSize: "18px" }}>Genre : {movie.Genre}</div>
                                <div>IMDB Rating : {movie.imdbRating}</div>
                            </p>
                        </div>
                    </div>
                    </Link>
                })
            }
        </div>
    )
})
export default Movies;