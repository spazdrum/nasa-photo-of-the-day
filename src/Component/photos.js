import React, { useState, useEffect } from "react";
import axios from "axios";

function Photos () {
    const [photo, setPhoto] = useState([])
    useEffect (() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=YVPagJ9qLby5sdcU77njZ5v0s9PVybf68UkwJlKE")
        .then(response => {
            console.log(response)
            setPhoto(response.data)
        }) 
    }, [])

    return (
        <div>
            <title>{photo.title}</title>
            <h3>{photo.date}</h3>
            <img src={photo.hdurl} />
            <h4>{photo.explanation}</h4>
        </div>
    )
}

export default Photos;