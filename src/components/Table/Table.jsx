import style from "./style.module.css"
import {listOfResult} from "../../constants/list-of-results"


export function TableComponent(){




    return (
        <>
            <div className={style['answers-container']} >
              
                            
                                        <table  width='100%'>
                                <thead className={style['table-header']}>
                                <tr >
                                  <th width='10%' >#</th>
                                  <th width='30%'>Place Name</th>
                                  <th width='60%'>Most answer</th>
                                </tr>
                                </thead>

                                <tbody className={style['table-body']}>
                                  {listOfResult.data.map((row,index)=>(
                                    <tr  className={style['table-row']} key={index}>
                                      <td className={style['td']}>{row.id}</td>
                                      <td className={style['td']}>{row.label}</td>
                                      <td className={style['td']}>{row.answer}</td>
                                  </tr>
                                  ))}



                                
                                </tbody>




                              </table>
            </div>
        </>
    )
}