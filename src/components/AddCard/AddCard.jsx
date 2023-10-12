import { Link } from 'react-router-dom'
import style from './style.module.css'
import {BsPlusLg} from 'react-icons/bs'

export function AddCard(){
    return (
        <Link className={style['add-card']+' d-flex flex-column align-items-center justify-content-center'}>
        <h2 ><BsPlusLg></BsPlusLg></h2>
        <h5 >Add New Survey</h5>
        </Link>
      
    )
}