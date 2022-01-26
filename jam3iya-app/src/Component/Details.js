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
      
      <p>Jam3ya Name: {jam3yaProps.title}</p>
      
      <p>Jam3ya Limit: {jam3yaProps.limit}</p>
      <p>Start Date: {jam3yaProps.startDate}</p>
      <p>End Date: {jam3yaProps.endDate}</p>
        </div> 
    </div>
  )
};
