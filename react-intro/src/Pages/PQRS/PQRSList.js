
import React from 'react';
//import './ToDoList.css';
import { CiCircleRemove, CiCircleCheck } from "react-icons/ci";
//import { ToDoContext } from '../ToDoContext';
//import { defaulttitleleftbarra, defaulListToDo, defaultImgUseEffect } from '../../../App_data';


function PQRSList(props) {
 
 return (
    <article className="PQRSList">
    
      <p 
        className={`PQRSList-p`}
      > {props.titlePQRS}
      </p>
      <input/>
    </article>
  );
}

export {PQRSList};