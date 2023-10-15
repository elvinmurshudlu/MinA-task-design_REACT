import { useEffect, useRef, useState } from 'react'
import './style.css'
import {BiDotsHorizontal} from "react-icons/bi"
import {cards} from "../../constants/cards"
import {Card} from "../../components/Card/Card"
import { AddCard } from '../../components/AddCard/AddCard'

export default function  CardsPage(){

    const [elements,SetElements] = useState(19)

    const container = useRef()

    function onScroll(){

        const element = container.current

            console.log(element.clientHeight + Math.ceil(element.scrollTop)  , element.scrollHeight  )
        if(element.clientHeight + Math.ceil(element.scrollTop)  >= element.scrollHeight  ){
            SetElements(element=>element+=5)
        }

    }
    



    return (
        <div ref={container} onScroll={onScroll} onWheel={onScroll} className="main-container" >
                <div className="card-item">

                    <AddCard></AddCard>
                </div>
                
                {
                    cards.slice(0,elements).map((card,index)=>(
                         <div key={index} className="card-item">

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