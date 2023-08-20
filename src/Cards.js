import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Cards.css"
import "./data"



const card = (props) => {
  return (
   
    <div className="card" style={{width: 18 +"rem"}}>
    <img src={props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="h">{props.title}</h5>
      <p className=" pa">{props.name}</p>
      <a href={props.link} className="btn btn-danger" >Watch Now</a>
    </div>
  </div>
    
    

   
    
  )
}

export default card