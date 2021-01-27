import './Exchange.css';

import React from 'react';
import ExchangeItem from './ExchangeItem';

export default function ExchangeList({exchange}) {

   return (
      <ul className='exchange_list'>
         {
            exchange.map(item => {
               return (<ExchangeItem item={item} key={item.curr} />)
            })
         }
      </ul>
   )
}