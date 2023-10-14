import {listOfResult} from "../../constants/list-of-results"
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';
import './style.css'

export function TableComponent(){

  const columns  = [
    {title:'#',field:'id',width:'10%',headerSort:false,resizable:false},
    {title:'Place Name',field:'label',width:'30%',headerSort:false ,resizable:false},
    {title:'Most answer',field:'answer',width:'60%',headerSort:false ,resizable:false},


  ]



    return (
        <>
                <ReactTabulator   columns={columns} data={listOfResult.data}  />

        </>
    )
}