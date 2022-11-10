import React, { useState } from 'react'
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

import "./styles.css"

function Todo() {
    const [tArray,setTarray]=useState([])
    const [filterType, setFilterType] = useState('all')
    console.log(tArray)
  return (
    <>
       
        <Form setArray={setTarray} justArray={tArray}/>
        <List setArray={setTarray} justArray={tArray} filterType={filterType} />
        <Footer setArray={setTarray} justArray={tArray} setFilterType={setFilterType} 
        filterType={filterType}/>
       
    </>
    
  )
}

export default Todo