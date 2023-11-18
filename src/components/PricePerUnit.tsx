
import './PricePerUnit.css'
import { Button } from '@radix-ui/themes';


function PricePerUnit() {
    return (
        <div>
            <p  style={{padding: 0, margin: 1}}>price per unit</p>
            <h3 style={{padding: 0, margin: 1, marginBottom: 18}}>10€</h3> 
            <Button>buy now!</Button>
        </div>
    );
}

export default PricePerUnit