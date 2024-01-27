import { useEffect, useState } from "react"
import axios from "axios";
import { hover } from "@testing-library/user-event/dist/hover";
import { act } from "@testing-library/react";

const MovieCard = () => {
    var [video, setVideo] = useState([]);
    var [id, setId] = useState(null);
    var [event,setEvent] = useState(false)
    useEffect(() => {
        axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
            .then((res) => {
                var data = res.data.Search;
                console.log(data)
                setVideo(data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
       
        
            if(id >= 1 ){
                var prevCard = document.getElementById(id);
                prevCard.className = "active-card"
            }else if(id == 0){
               
                    var activeCard = document.getElementsByClassName("active-card")[0];
                    activeCard.className = "movie-card"
            
             
            }
        
     
    }, [id])

    return (
        <>
            {video.map((data, i) => {

                return <div className="movie-card" key={i} onMouseEnter={() => { setId(i+1) }} onMouseLeave={() => { setId(0) }} id={i + 1} >
                    <img src={data.Poster} />
                    <p className="desc">Title :{data.Title} </p>
                    <p className="desc"> Year :{data.Year} </p>
                </div>

            })}

        </>
    )
}
export default MovieCard