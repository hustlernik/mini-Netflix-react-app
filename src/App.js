import React from 'react'
import Card from "./Cards.js"
import "./Cards.js"
import "./App.css"
import Data from "./data.jsx"


const App = () => {
  
  function createCard(val){
    return (<Card 
      image={val.image}
      title={val.title}
      name={val.name}
      link={val.link}
      > </Card>
    );
  }

  var year= new Date().getFullYear();


  return (
    <><h1 className="title"> NETFLIX BEST DOCUMENTARIES</h1>
    
      <div className="container">
      
      
      
      {Data.map(createCard)}
      
      

      </div>

      
      <footer style={{textAlign:"center"}}>
        <p>©{year} Created by NIKHIL RAJ </p>
      </footer>
    

    </>
  )
}

export default App