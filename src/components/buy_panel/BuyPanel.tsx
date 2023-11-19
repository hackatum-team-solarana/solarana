import { Text, Flex} from "@radix-ui/themes";
import PricePerUnit from "../price_per_unit/PricePerUnit";
import "./BuyPanel.css";


interface BuyPanelParams  {
    provider: string, 
    region: string,
    ageInYears: number, 
    powerPerUnit: number, 
    totalAmount: number,
    availableAmount: number,
    price: number,
};


function BuyPanel(props: BuyPanelParams) {
    const {provider, region, ageInYears, powerPerUnit, totalAmount, availableAmount, price} = props;
    return (
        <div className="wrap">
            <h4><Text>25qm Solarpanel</Text></h4>
            <Flex gap="3" align="center">
            <div className="grid-container-buy-panel">
                
                <div className="grid-item-above-buy-panel">
                    <div className="grid-container-buy-panel">
      
                        <div className="grid-item-buy-panel"></div>
                        <div className="grid-item-buy-panel"></div>
         
                        <div className="grid-item-buy-panel"><Text size="2">provider:</Text></div>
                        <div className="grid-item-buy-panel"><Text size="2">{ provider.substring(0, 5) + "..." }</Text></div>
       
                        <div className="grid-item-buy-panel"><Text size="2">region:</Text></div>
                        <div className="grid-item-buy-panel"><Text size="2">{ region }</Text></div>

                        <div className="grid-item-buy-panel"><Text size="2">age in years:</Text></div>
                        <div className="grid-item-buy-panel"><Text size="2">{ ageInYears }</Text></div>

                        <div className="grid-item-buy-panel"><Text size="2">kWh/unit:</Text></div>
                        <div className="grid-item-buy-panel"><Text size="2">{ powerPerUnit }</Text></div>

                        <div className="grid-item-buy-panel"><Text size="2">total amount:</Text></div>
                        <div className="grid-item-buy-panel"><Text size="2">{ totalAmount }</Text></div>

                        <div className="grid-item-buy-panel"><Text size="2">available amount:</Text></div>
                        <div className="grid-item-buy-panel"><Text size="2">{ availableAmount }</Text></div>

                    </div>
                </div>
                
                <div className="grid-item-above-buy-panel">
                    <PricePerUnit price={price} provider={provider} /> 
                </div>
            
            </div>
            </Flex>
        </div>
    );
}

export default BuyPanel
export type { BuyPanelParams }
