import React from 'react';



function PQRSPage(props) {
  
  return(
    <section className='PQRSPage'>
    {props.children}
    {console.log(props.children)}
  </section>
  )
}

export { PQRSPage};