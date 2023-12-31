import { Form } from "../../components/Form/Form"
import "./style.css"
import { MapComponent } from "../../components/Map/MapComponent"

export function NewCard(){
    return (
        <div  className='add-card-container row'>
                <div className="col-12 col-md-3 p-3 order-1 order-md-0">
                    {/* <mina-form></mina-form> */}
                    <Form></Form>
                </div>
                <div className="col-12 col-md-9 p-3 order-0 order-md-1">
                    <MapComponent></MapComponent>
                </div>

</div>

    )
}