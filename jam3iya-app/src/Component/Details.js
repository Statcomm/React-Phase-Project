import React from 'react';
import jam3yaStore from '../Stores/Jam3yastore';
import { useParams } from 'react-router-dom';

export default function Details (jam3ya) {
    const jam3yaSlug = useParams().jam3yaSlug;
    const jam3yaProps = jam3yaStore.jam3ya.find((e)=>e.slug===jam3yaSlug)
    console.log(jam3yaSlug);
    console.log(jam3yaProps);
  return (
    <div className="single-service wow fadeInUp" data-wow-delay=".4s">
      <center>
        <div className="wandWrapper" >
          <img src={jam3yaProps.image}
           alt=""
           style={{ height: "400px", width: "400px"}}/>

        </div>
      </center>
      <div className="content">
      
      <p>Jam3ya Name: {jam3ya.title}</p>
      
      <p>: {jam3yaProps.limit}</p>
      <p>: {jam3yaProps.startDate}</p>
      <p>: {jam3yaProps.endDate}</p>
        </div> 
    </div>
  )
};



{/* <div className="content">
      <img alt={jam3ya.title} src={jam3ya.image}/>
      <p>Jam3ya Name: {jam3ya.title}</p>
      <p>Amount: {jam3ya.amount}</p>
      <p>: {jam3ya.limit}</p>
      <p>: {jam3ya.startDate}</p>
      <p>: {jam3ya.endDate}</p>
        </div> */}