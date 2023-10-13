import { useEffect, useRef, useState } from 'react'
import style from './style.module.css'
import {BiDotsHorizontal} from "react-icons/bi"
import {cards} from "../../constants/cards"
import {Card} from "../../components/Card/Card"
import { AddCard } from '../../components/AddCard/AddCard'

export default function  CardsPage(){

    const [elements,SetElements] = useState(19)

    const container = useRef()

    function onScroll(){

        const element = container.current

        if(element.clientHeight + Math.ceil(element.scrollTop)  +2>= element.scrollHeight  ){
            SetElements(element=>element+=5)
        }

    }


    return (
        <div ref={container} onScroll={onScroll} className={style["main-container"]} >
                <div className={style["card-item"]}>

                    <AddCard></AddCard>
                </div>
                
                {
                    cards.slice(0,elements).map((card,index)=>(
                         <div key={index} className={style["card-item"]}>

                                        <Card card={card}></Card>
                            </div>
                    ))
                }

                {
                  elements<=cards.length &&  <div  className="w-100 d-flex justify-content-center ">
                    <BiDotsHorizontal></BiDotsHorizontal>
                </div>
                }
</div>
    )
}