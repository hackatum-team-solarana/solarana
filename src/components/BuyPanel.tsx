import { Separator, Flex} from "@radix-ui/themes";
import PricePerUnit from "./PricePerUnit";
import "./BuyPanel.css";


function BuyPanel() {
    return (
        <div>
            
            <Flex gap="3" align="center">
            <div className="grid-container">
      
            <div className="grid-item"><h4>25qm Solarpanel</h4></div>
            <div className="grid-item"></div>
         
            <div className="grid-item">provider</div>
            <div className="grid-item">Hans Mueller</div>
       
            <div className="grid-item">region</div>
            <div className="grid-item">Bayern</div>

            <div className="grid-item">age in years</div>
            <div className="grid-item">0</div>

            <div className="grid-item">kWh/unit</div>
            <div className="grid-item">11111111!!!11</div>



        </div>
             
                <Separator size="3" orientation="vertical" />
                <PricePerUnit /> 
            </Flex>
        </div>
    );
}

export default BuyPanel
