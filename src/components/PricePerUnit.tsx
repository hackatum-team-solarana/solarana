
import './PricePerUnit.css'
import { Button, Text } from '@radix-ui/themes';


function PricePerUnit() {
    return (
        <div>
            <p  style={{padding: 0, margin: 1}}><Text size="2">price per unit:</Text></p>
            <h3 style={{padding: 0, margin: 1, marginBottom: 18}}><Text>10€</Text></h3> 
            <Button style={{ background: "#009989", opacity: 0.46 }}><Text size="2">buy now!</Text></Button>
        </div>
    );
}

export default PricePerUnit