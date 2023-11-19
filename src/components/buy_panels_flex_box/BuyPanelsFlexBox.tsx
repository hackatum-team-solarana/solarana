
import { useEffect, useRef, useState } from "react";
import BuyPanel from "../buy_panel/BuyPanel";
import { BuyPanelParams } from "../buy_panel/BuyPanel";
import "./BuyPanelsFlexBox.css";
import BuyFilterButtons from "../buy_filter_buttons/BuyFilterButtons";


function BuyPanelsFlexBox() {
    const [panels, setPanels] = useState<BuyPanelParams[]>([]);

    const [region, setRegion] = useState<string | null>(null);
    const ageRef = useRef<HTMLInputElement | null>(null);
    const priceRef = useRef<HTMLInputElement | null>(null);
    const powerRef = useRef<HTMLInputElement | null>(null);

    
    
    useEffect(() => {
        setPanels([{provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, availableAmount: 75, totalAmount: 100, price: 13},
        {provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, availableAmount: 75, totalAmount: 100, price: 13},
        {provider: "Hans Müller", region: "Berlin", ageInYears: 0, powerPerUnit: 1111, availableAmount: 75, totalAmount: 100, price: 13},
        {provider: "Hans Müller", region: "Bremen", ageInYears: 0, powerPerUnit: 1111, availableAmount: 75, totalAmount: 100, price: 13},
        {provider: "Hans Müller", region: "Hamburg", ageInYears: 0, powerPerUnit: 1111, availableAmount: 75, totalAmount: 100, price: 13}]);
    }, [])

    return (
        <div>
        <div style={{ textAlign:"center"}}>
            <BuyFilterButtons setRegion={setRegion} ageRef={ageRef} priceRef={priceRef} powerRef={powerRef}/>
        </div>
        <div className="container-buy">
            {panels.map(panel => <div className="item-buy"><BuyPanel {...panel} /></div>)}
            
        </div>
        </div>
    );
}

export default BuyPanelsFlexBox