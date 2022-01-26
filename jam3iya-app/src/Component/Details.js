import React from 'react';
import jam3yaStore from '../Stores/Jam3yastore';
import { useParams } from 'react-router-dom';

export default function Details (jam3ya) {
    const jam3yaSlug = useParams().jam3yaSlug;
    const jam3ya = jam3yaStore.jam3ya.find((e)=>e.slug===jam3yaSlug)
  return (<div className="content">
      <img alt={jam3ya.title} src={jam3ya.image}/>
      <p>Jam3ya Name: {jam3ya.title}</p>
      <p>Amount: {jam3ya.amount}</p>
      <p>: {jam3ya.limit}</p>
      <p>: {jam3ya.startDate}</p>
      <p>: {jam3ya.endDate}</p>
        </div>
    
  )
};
