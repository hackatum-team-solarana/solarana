import { useEffect, useState } from "react";
import BuyPanel from "./BuyPanel";
import { BuyPanelParams } from "./BuyPanel";
import "./BuyPanelsFlexBox.css";


function BuyPanelsFlexBox() {
    const [panels, setPanels] = useState<BuyPanelParams[]>([]);
    
    useEffect(() => {
        setPanels([{provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111},
        {provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111},
        {provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111},
        {provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111},
        {provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111}]);
    }, [])
    return (
        <div className="container">
            
            {panels.map(panel => <div className="item"><BuyPanel {...panel} /></div>)}
            
        </div>
    );
}

export default BuyPanelsFlexBox