import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";

function Photos () {
    const [photo, setPhoto] = useState([])
    useEffect (() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=YVPagJ9qLby5sdcU77njZ5v0s9PVybf68UkwJlKE")
        .then(response => {
            console.log(response)
            setPhoto(response.data)
        }).catch(error => {
            console.log("Error!", error))}
    }, []);

    return (
        <div>
            <Card date = {photo.date}
            explanation = {photo.explanation}
            title = {photo.title}
            date = {photo.date}
            imgUrl = {photo.hdurl} />
        </div>
    );
};

export default Photos;