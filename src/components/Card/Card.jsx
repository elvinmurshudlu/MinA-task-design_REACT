import { Link } from "react-router-dom";
import style from "./style.module.css"
import {BsFillHeartFill , BsLink45Deg , BsFillHandIndexFill} from "react-icons/bs"


export function Card({card}){
    return (
       
        
        <Link  to={'/cards/'+card.id} className={style['card-item'] + " d-flex"} >
               <img className={style['img']} src={card.img} alt=""/>
  <div className={style['content'] + '  d-flex flex-column justify-content-between align-items-end'} >

    <div className={style["vote"]}>Vote:</div>
    <div className={style['content-footer'] + ' d-flex justify-content-between'} >
      <div className={style["content-footer_text"]}>
        <h6 className={style["content-footer_title"]}>{card.title}</h6>
        <p className={style["content-footer_subtitle"]}>{card.subtitle}</p>
      </div>
      <div className={style['content-footer_icons'] + ' d-flex align-items-end justify-content-end gap-1 '} >
         <BsFillHeartFill></BsFillHeartFill>
          <BsLink45Deg></BsLink45Deg>
          <BsFillHandIndexFill></BsFillHandIndexFill>
      </div>
    </div>

  </div>
        </Link>


        
    )
}