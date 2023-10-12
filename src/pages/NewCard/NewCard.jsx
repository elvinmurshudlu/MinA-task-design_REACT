import { Form } from "../../components/Form/Form"
import style from "./style.module.css"
import { Map } from "../../components/Map/Map"

export function NewCard(){
    return (
        <div  className={style['add-card-container']+ ' row'}>
                <div className="col-12 col-md-3 p-3 order-1 order-md-0">
                    {/* <mina-form></mina-form> */}
                    <Form></Form>
                </div>
                <div className="col-12 col-md-9 p-3 order-0 order-md-1">
                    <Map></Map>
                </div>

</div>

    )
}