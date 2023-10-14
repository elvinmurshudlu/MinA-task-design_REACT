import {Link} from "react-router-dom";

import {settings} from "../../constants/settings"
import {menu} from "../../constants/menu"
import {user} from '../../constants/user'
import { BsFillChatLeftTextFill , BsBellFill , BsFillMoonFill ,BsFillCaretDownFill} from 'react-icons/bs'
import{
CiMenuBurger

} from 'react-icons/ci'
import { useState } from "react";



export default function Header({changeTheme}){

    const [isOpen ,setIsOpen] = useState(false)

    return (

            <nav>
                <div className='nav-container'>
                    <div className='navbar-desktop'>
                        <Link style={{display:'flex',alignItems:'center'}} to={'/'}><img src={settings.logo} />{settings.logo_title}</Link>



                        <ul className="d-none d-lg-flex">
                                {
                                    menu.map((item,index)=>(
                                        <li><Link key={index} to={item.path}>{item.label}</Link></li>
                                    ))
                                }


                        </ul>


                        <div className='settings d-none d-lg-flex'>
                            <div className='controls'>
                                <span className="icon-btn"><BsBellFill></BsBellFill></span>
                                <span className="icon-btn"><BsFillChatLeftTextFill></BsFillChatLeftTextFill></span>
                                <span onClick={changeTheme} className="icon-btn"><BsFillMoonFill></BsFillMoonFill></span>
                            </div>

                            <div className="profile">

                            <div className='profile_title d-flex' >
                                <div>
                                    <h6>{user.name}</h6>
                                    <p>Vote:{user.vote},Survey:{user.survey}</p>
                                </div>
                                <span className="d-flex align-items-center">
                                        <BsFillCaretDownFill></BsFillCaretDownFill>
                                </span>
                                </div>
                                <span className='profile_pic'>
                                        <img src={user.img} alt=""/>
                                    </span>
                            </div>
                        </div>


                        <span onClick={()=>setIsOpen(!isOpen)} className={'d-block d-lg-none'} ><CiMenuBurger></CiMenuBurger></span>

                    </div>
                    <div style={{height:isOpen ? 'max-content' :''}} className='navbar-mobile'>
                                    <div className='settings d-flex justify-content-between p-2'>
                                        <div className='controls'>
                                            <span className="icon-btn"><BsBellFill></BsBellFill></span>
                                            <span className="icon-btn"><BsFillChatLeftTextFill></BsFillChatLeftTextFill></span>
                                            <span onClick={changeTheme} className="icon-btn"><BsFillMoonFill></BsFillMoonFill></span>
                                        </div>

                                        <div className="profile">

                                        <div className='profile_title d-flex' >
                                            <div>
                                                <h6>{user.name}</h6>
                                                <p>Vote:{user.vote},Survey:{user.survey}</p>
                                            </div>
                                            <span className="d-flex align-items-center">
                                                    <BsFillCaretDownFill></BsFillCaretDownFill>
                                            </span>
                                            </div>
                                            <span className='profile_pic'>
                                                    <img src={user.img} alt=""/>
                                                </span>
                                        </div>

                               

                                    </div>
                                    <ul className="d-flex flex-column align-items-center gap-3">
                                            {
                                                menu.map((item,index)=>(
                                                    <li><Link key={index} to={item.path}>{item.label}</Link></li>
                                                ))
                                            }
                        </ul>
                    </div>
                </div>
            </nav>
    )
}