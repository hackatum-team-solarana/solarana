import { Text, Flex} from "@radix-ui/themes";
import PricePerUnit from "./PricePerUnit";
import "./BuyPanel.css";


function BuyPanel() {
    return (
        <div className="wrap">
            <h4><Text>25qm Solarpanel</Text></h4>
            <Flex gap="3" align="center">
            <div className="grid-container">
                
                <div className="grid-item-above">
                    <div className="grid-container">
      
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
         
                        <div className="grid-item"><Text size="2">provider:</Text></div>
                        <div className="grid-item"><Text size="2">Hans Mueller</Text></div>
       
                        <div className="grid-item"><Text size="2">region:</Text></div>
                        <div className="grid-item"><Text size="2">Bayern</Text></div>

                        <div className="grid-item"><Text size="2">age in years:</Text></div>
                        <div className="grid-item"><Text size="2">0</Text></div>

                        <div className="grid-item"><Text size="2">kWh/unit:</Text></div>
                        <div className="grid-item"><Text size="2">11111</Text></div>

                    </div>
                </div>
                
                <div className="grid-item-above">
                    <PricePerUnit /> 
                </div>
            
            </div>
            </Flex>
        </div>
    );
}

export default BuyPanel
