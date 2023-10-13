import style from './style.module.css'
import {form_settings} from '../../constants/forms'
import { useState,useRef } from 'react'
import { ColorPicker } from 'primereact/colorpicker';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Answer } from '../Answers/Answers';
import { SelectComp } from '../SelectComponent/SelectComponent';
import axios from 'axios';
        
export function Form(){
  const op = useRef(null);
    const [color,setColor] = useState(null)

    const [answers,setAnswers] = useState([])
    const [form,setForm] = useState({})

    const [isSubmitted,setIsSubmitted] = useState(false)

    function handleWrite(event){
      const value = event.target.value
      const id = event.target.id

      
      setForm(form=>({...form,[id]:value}))

    }

    function addColor(e){
        e.preventDefault()

        if(!color || !form['answers']){
          return
        }
        
        setAnswers(ans=>([{color:color,answer:form['answers']},...ans]))
        setForm(form=>({...form,['answers']:''}))
        setColor(null)

    }


    async function sendData(e){
      e.preventDefault()
      setIsSubmitted(true)

      if(Object.keys(form).length<5 || answers.length===0) return

      try{
        await axios.post(form_settings.enpoint,
          {...form,['answers']:answers}
        )

      }catch(e){
        console.log(e)

      }



    }


    function onSelectOption(field,value){
      setForm(form=>({...form,[field]:value}))
    }

    return (
        <>
        <div className={style['create-container']+' p-2'} >


<form className={style['form']} >
  <h6>{form_settings.title}</h6>
            <OverlayPanel ref={op}>
                  <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
            </OverlayPanel>


          {
            form_settings.fields.map((field,index)=>(
              <label key={index} className={style['label'] + (!form[field.field] && isSubmitted ? (' ' + style['error']) : '')}>
                <div>{field.label}</div>
                    
                {
                  field.type === 'input-text' && <input onChange={handleWrite} value={form[field.field] || ''} className={style['input']} type="text" id={field.field}/>
                }
                {
                  field.type === 'textarea' && <textarea onChange={handleWrite} value={form[field.field] || ''} className={style['textarea']}  id={field.field}></textarea>
                }
                {
                  field.type === 'select' && <SelectComp isSubmit={isSubmitted} data={field} onSelect={onSelectOption}></SelectComp>
                }
                
                {
                  field.type === 'SpecialComponent1' && 
                  <>
                   <div className={style['answer']+ ' d-flex'} >
                   <input className={style['input']} type="text" id={field.field} onChange={handleWrite} value={form[field.field] || ''}/>
                      <div className="d-flex">
                        <button onClick={(e) => {
                          e.preventDefault()
                          op.current.toggle(e)
                        }}>
                          Choose color
                        </button>
                        <button onClick={addColor}>Add to list</button>
                      </div>
                    </div>

                    <Answer data={answers}></Answer>
                  </>
                  
                  
                }

            </label>
            ))
          }


<div className={style['btn-submit-container'] + ' d-flex justify-content-end'} >
        <button className={style['btn-submit']} onClick={sendData}>Save</button>
      </div>
</form>




</div>
        </>
    )
}