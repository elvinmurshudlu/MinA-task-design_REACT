import { useState } from "react"
import {BsCaretDownFill} from 'react-icons/bs'

export function SelectComp({initialText='Option List',data,onSelect,isSubmit}){

    const [selectedItem,setSelectedItem] = useState(initialText)
    const [isOpen,setIsOpen] = useState(false)


    return(
        <>
        <div className="select-container" onClick={()=>setIsOpen(!isOpen)}>
            <span><BsCaretDownFill></BsCaretDownFill></span>
            <div className="selected-item" style={{border:(isSubmit && selectedItem == initialText) ? '1px solid red' : 'none'}}>{selectedItem}</div>
            <div className="options-wrapper" style={{height:isOpen ?'max-content' :'0'}}>
                {
                    data.data.map((option,index)=>(
                        <div className="option" onClick={()=>{
                            setSelectedItem(option.label)
                            setIsOpen(false)
                            
                            onSelect(data.field,option.label)
                        }}>
                                {option.label}
                        </div>
                    ))
                }
            </div>

        </div>
        </>
    )
}