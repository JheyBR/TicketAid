import React from 'react';
import { PQRSList } from './PQRSList';
//import Costumer from '.';
import { defaultPQRS } from '../../App_data';
import { PQRSPage } from './PQRSPage';



function PQRSSection(props,{ setOpenModal }) {
    return(
        <div>
          <div className="PQRSSection">
            <h2 className="PQRSHeader">Reportes y PQRS</h2>
            <div>   
            <PQRSPage>
            {defaultPQRS.map(Pqrs => (
                <PQRSList
                key={Pqrs.titlePQRS} 
                titleCostumer={Pqrs.titlePQRS} 
                /> ))} 
            </PQRSPage>
            </div>        
            <article className="btnToDoHeader">
                <button 
                  className="btnAddToDo"
                  onClick={
                    // (
                  ()=>{
                       setOpenModal(state => !state);
                  }     
                  }
                  >
                                  
                </button>
            </article>
          </div>
          <div >
          </div>
        </div>
      )
}

export { PQRSSection};