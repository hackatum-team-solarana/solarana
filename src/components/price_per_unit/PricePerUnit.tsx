
import './PricePerUnit.css'
import { Button, Text } from '@radix-ui/themes';


function PricePerUnit(props: {price: number}) {
    return (
        <div className='price-per-unit'>
            <p  style={{padding: 0, margin: 1}}><Text size="2">price per unit:</Text></p>
            <h3 style={{padding: 0, margin: 1, marginBottom: 18}}><Text style={{fontWeight:"bold"}}>{ props.price } $</Text></h3>
            <Button className={"BuyButtonNow"}> Buy now!</Button>
        </div>
    );
}

export default PricePerUnit