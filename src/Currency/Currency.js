import React from 'react';

export default function Currency({currency}) {
   const { base, timestamp } = { ...currency };
   const date = new Date(timestamp*1000);
   const formattedDate = ['0' + date.getDay(), '0' + date.getMonth()]
      .reduce((acc, cur) => acc += cur.substr(-2) + '.', '') + date.getFullYear();

   return (
      <h3>
         {`${base} / ${formattedDate}`}
      </h3>
   )
}