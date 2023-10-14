import { useState } from 'react'
import style from './style.module.css'
import {BsFillTrashFill , BsFillPencilFill} from 'react-icons/bs'


export function Answer({data}){
    return (
        <>

<div className={style['color-container'] + ' mt-1'}    >
  <table className={style['table']}>
    <thead>
    <tr className="table-header">
      <th>Color</th>
      <th>Answers</th>
      <th>Operations</th>
    </tr>
    </thead>

    <tbody>


{
    data && data.map((row,index)=>(
        <tr key={index} style={{borderLeftStyle:'solid',borderLeftWidth:'1px',borderLeftColor:"#"+row.color}}>
            <td style={{color:row.color}}>{row.color}</td>
      <td>{row.answer}</td>
      <td>
        <div className="d-flex gap-2 justify-content-center">
          <BsFillTrashFill></BsFillTrashFill>
          <BsFillPencilFill></BsFillPencilFill>
        </div>
      </td>
        </tr>
    ))
}


    
    </tbody>




  </table>
</div>
        </>
    )
}