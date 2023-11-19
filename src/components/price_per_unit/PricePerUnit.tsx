
import useBuyPanel from '../../hooks/useBuyPanel';
import './PricePerUnit.css'
import { Button, Text } from '@radix-ui/themes';


function PricePerUnit(props: {price: number, provider: string}) {
    const { price, provider } = props;
    const { buyPanel } = useBuyPanel();
    
    return (
        <div className='price-per-unit'>
            <p  style={{padding: 0, margin: 1}}><Text size="2">price per unit:</Text></p>
            <h3 style={{padding: 0, margin: 1, marginBottom: 18}}><Text style={{fontWeight:"bold"}}>{ price } $</Text></h3>
            <Button className={"BuyButtonNow"} onClick={() => buyPanel(provider)}> Buy now!</Button>
        </div>
    );
}

export default PricePerUnit
