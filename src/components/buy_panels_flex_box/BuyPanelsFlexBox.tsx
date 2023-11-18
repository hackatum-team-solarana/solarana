
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
        <div>
            <BuyFilterButtons setRegion={setRegion} ageRef={ageRef} priceRef={priceRef} powerRef={powerRef}/>
        </div>
        <div className="container">
            {panels.filter(panel => (region === null || panel.region === region))
            .filter(panel => (ageRef.current === null || ageRef === undefined || panel.ageInYears <= parseInt(ageRef!.current!.value)))
            .filter(panel => (priceRef.current === null || priceRef === undefined || panel.price <= parseInt(priceRef!.current!.value)))
            .filter(panel => ((powerRef.current === null || powerRef === undefined) || panel.powerPerUnit >= parseInt(powerRef!.current!.value))) 
            .map(panel => <div className="item"><BuyPanel {...panel} /></div>)}
            
        </div>
        </div>
    );
}

export default BuyPanelsFlexBox