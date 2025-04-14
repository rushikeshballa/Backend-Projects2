import React from "react";
import { useGetMoviesbytitleQuery } from "../services/moviesApi";
import { useParams } from "react-router-dom";

const Movie = (() => {
    let x = useParams()
    var { isloding, data } = useGetMoviesbytitleQuery(x.name)
    console.log(data)
    if (data) {
        return (
            <div className="p-4">
                {/* top part */}
                <div className="d-flex justify-content-around ">
                    <img className="" src={data?.Poster} alt="" />
                    <div className="p-4">
                        <h1>{data?.Title}</h1>
                        <h4>Genre :- {data?.Genre}</h4>
                        
                        <div>
                            {/* <div><h4> Ratings :</h4> */}
                            {
                                data?.Ratings.map((a, i) => {
                                    return <div key={a.Source} className="d-flex bg-higligh">
                                        <h5>{a.Source} : </h5>
                                        <h5>{a.Value}</h5>
                                    </div>
                                })
                            }
                        </div>

                        <br />
                        {<div>
                            <h4>About the movie :-</h4>
                            <h6>{
                                data?.Plot
                            }
                            </h6>
                        </div>
                        }
                    </div>
                </div>

                {/* bottom part */}
                <div className="p-5">

                    <h4>Director :- {data?.Director}</h4>
                    <h4>Writer :- {data?.Writer}</h4>
                    <h4>Cast :- {data?.Actors}</h4>
                    <h4>Awards :- {data?.Awards}</h4>
                    <h4>
                        Box Office :- {data?.BoxOffice}
                    </h4>
                    <h4>Relased:- {data?.Released} </h4>
                    <h4>Runtime :- {data?.Runtime}</h4>
                    <h4>Type:- {data?.Type}</h4>
                    <h4>Language:- {data?.Language}</h4>
                </div>
            </div>

        )
    }
    else {
        return (
            <h1>Movie Not Found</h1>
        )
    }

})
export default Movie