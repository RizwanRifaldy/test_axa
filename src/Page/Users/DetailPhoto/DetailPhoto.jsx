import React from 'react'
import { useParams } from "react-router-dom";

const DetailPhoto = (props) => {
  const { title, photo } = useParams();

  return (
    <div className="wrap">
      <div className="menu">
        <b>Photo</b> <br />
        <img src= {atob(photo)} />
        <br/>
        {atob(title)}
      </div>
    </div>
  )
}

export default DetailPhoto