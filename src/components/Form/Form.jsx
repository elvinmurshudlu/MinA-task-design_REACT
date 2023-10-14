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


    const [answer,setAnswer] = useState('')



    function handleWrite(event){
      const value = event.target.value
      const id = event.target.id
      setForm(form=>({...form,[id]:value}))

    }

    function addColor(e){
        e.preventDefault()

        if(!color || !answer){
          return
        }
        

        setForm(form=>{
          const updatedForm = {...form}
          if(updatedForm['answers']){
            updatedForm['answers'] = [{color:color,answer:answer}, ...updatedForm['answers']]

          }else{
            updatedForm['answers'] = [{color:color,answer:answer}]
          }
          return updatedForm
        })

        setAnswer('')
        setColor(null)

    }


    async function sendData(e){
      e.preventDefault()
      setIsSubmitted(true)

      if(Object.keys(form).length<5) return

      for(let a in form){
        if(!form[a]) return
      }

      try{
        await axios.post(form_settings.enpoint,
          {...form}
        )

      }catch(e){
        console.log(e)

      }



    }


    function onSelectOption(field,value){
      setForm(form=>({...form,[field]:value}))
    }

    return (
        

<div className="create-container p-2">
  <form action="">
      <h6>{form_settings.title}</h6>
      <OverlayPanel ref={op}>
                  <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
      </OverlayPanel>

      {
            form_settings.fields.map((field,index)=>(
              <label key={index} className={(!form[field.field] && isSubmitted ? 'error'  : '')}>
                <div>{field.label}</div>
                    
                {
                  field.type === 'input-text' && <input onChange={handleWrite} value={form[field.field] || ''}  type="text" id={field.field}/>
                }
                {
                  field.type === 'textarea' && <textarea onChange={handleWrite} value={form[field.field] || ''}   id={field.field}></textarea>
                }
                {
                  field.type === 'select' && <SelectComp isSubmit={isSubmitted} data={field} onSelect={onSelectOption}></SelectComp>
                }
                
                {
                  field.type === 'SpecialComponent1' && 
                  <>
                   <div className='answer d-flex' >
                   <input  type="text"  onChange={(e)=>setAnswer(e.target.value)} value={answer}/>
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

                    <Answer data={form['answers'] || []}></Answer>
                  </>
                  
                  
                }

            </label>
            ))
          }
      
      <div className='btn-submit-container d-flex justify-content-end'>
        <button className='btn-submit' onClick={sendData}>Save</button>
      </div>
  </form>
</div>

        
    )
}