
import './styleInvestmentCardPeicePerUnit.css'
import { Text } from '@radix-ui/themes';


function PricePerUnit(props: {winThisMonth: number, totalWin: number}) {
    return (
        <div>
            <p  style={{padding: 0, margin: 1}}><Text size="2">win this month:</Text></p>
            <h3 style={{padding: 0, margin: 1, marginBottom: 18}}><Text>{ props.winThisMonth }</Text></h3>
            <p  style={{padding: 0, margin: 1}}><Text size="2">total win:</Text></p>
            <h3 style={{padding: 0, margin: 1, marginBottom: 18}}><Text>{ props.totalWin }</Text></h3>

        </div>
    );
}

export default PricePerUnit