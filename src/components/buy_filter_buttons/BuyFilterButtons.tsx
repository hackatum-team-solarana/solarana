import { Button, Text} from "@radix-ui/themes"
import "./BuyFilterButtons.css"

function BuyFilterButtons() {



    return (
        <div>
            <div className="grid-container-buy-filter">
                <div className="grid-item-buy-filter">
                    <Text><h3>Buy new solar panels:</h3></Text>
                </div>
      
                <div className="grid-item-buy-filter">
                <Button style={{ background: "#009989", opacity: 0.46 }}><Text>filter</Text></Button>
                </div>

               

            </div>

           
            
            
           
           
        </div>
    )

}

export default BuyFilterButtons