import './Exchange.css';

import React from 'react';

export default function ExchangeItem({ item }) { 

   return (
      <li className='exchange_list_item'>
         <b>{item.curr}: </b>{Math.round(item.exch*10000)/10000}
      </li>
   )
}