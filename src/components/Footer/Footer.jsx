import {settings} from "../../constants/settings"
import style from "./style.module.css"
import {footerMenu} from "../../constants/footer" 
import { Link } from "react-router-dom"

export default function Footer(){
    return (

        <footer className='footer flex-column flex-md-row'  >
        <p>Mail: {settings.mail}</p>
        <ul class="d-flex gap-3 flex-column flex-md-row">

            {
                footerMenu.map((menu,index)=>(
                    <li key={index}><Link to={menu.path}>{menu.label}</Link></li>
                ))
            }

            
        </ul>
        <p class="text-end">{settings.copyright}</p>
</footer>

    )
}