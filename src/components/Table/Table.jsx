import style from "./style.module.css"
import {listOfResult} from "../../constants/list-of-results"


export function TableComponent({data}){


const columns = [
    {title:'#',field:'id',width:'10%',headerSort:false,resizable:false},
    {title:'Place Name',field:'label',width:'30%',headerSort:false ,resizable:false},
    {title:'Most answer',field:'answer',width:'60%',headerSort:false ,resizable:false},


  ]



    return (
        <>
            <div className={style['answers-container']}>
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