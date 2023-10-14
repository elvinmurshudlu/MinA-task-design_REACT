import { Link } from 'react-router-dom'
import './style.css'
import {BsPlusLg} from 'react-icons/bs'

export function AddCard(){
    return (
        <Link to={'/new-card'} className='add-card d-flex flex-column align-items-center justify-content-center'>
        <h2 ><BsPlusLg></BsPlusLg></h2>
        <h5 >Add New Survey</h5>
        </Link>
      
    )
}