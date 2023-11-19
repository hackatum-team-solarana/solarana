
import './PricePerUnit.css'
import { Button, Text } from '@radix-ui/themes';


function PricePerUnit(props: {price: number}) {
    return (
        <div className='price-per-unit'>
            <p  style={{padding: 0, margin: 1}}><Text size="2">price per unit:</Text></p>
            <h3 style={{padding: 0, margin: 1, marginBottom: 18}}><Text>{ props.price }</Text></h3> 
            <Button style={{display: 'block', textAlign: 'center', background: "#009989", opacity: 0.46}}><Text size="2">buy now!</Text></Button>
        </div>
    );
}

export default PricePerUnit