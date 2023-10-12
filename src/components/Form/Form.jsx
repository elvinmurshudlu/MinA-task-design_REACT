import style from './style.module.css'
import {form_settings} from '../../constants/forms'
import { useState,useRef } from 'react'
import { ColorPicker } from 'primereact/colorpicker';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { Answer } from '../Answers/Answers';
        
export function Form(){
  const op = useRef(null);
    const [color,setColor] = useState(null)
    const [answers,setAnswers] = useState([])
    const [form,setForm] = useState({})


    function handleWrite(event){
      const value = event.target.value
      const id = event.target.id

      setForm(form=>({...form,[id]:value}))

    }

    function sendData(e){
      e.preventDefault()
      console.log(form);
    }


    return (
        <>
        <div className={style['create-container']+' p-2'} >


<form className={style['form']} >
  <h6>{form_settings.title}</h6>
        {/* <Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} /> */}
            <OverlayPanel ref={op}>
                  <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
            </OverlayPanel>


          {
            form_settings.fields.map((field,index)=>(
              <label key={index} className={style['label'] + (!form[field.field] ? ' error' : '')}>
                {field.label}
                    
                {
                  field.type === 'input-text' && <input onChange={handleWrite} value={form[field.field] || ''} className={style['input']} type="text" id={field.field}/>
                }
                {
                  field.type === 'textarea' && <textarea onChange={handleWrite} value={form[field.field] || ''} className={style['textarea']}  id={field.field}></textarea>
                }
                {
                  field.type === 'select' && <input onChange={handleWrite} value={form[field.field] || ''} className={style['input']} type="text" placeholder='Select' id={field.field}/>
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
                        <button >Add to list</button>
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