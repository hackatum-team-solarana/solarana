import { useEffect, useState } from "react";
import "./styleInvestmentCardPanelsFlexBox.css";
import InvestmentCardPanel, {BuyPanelParams} from "./InvestmentCardPanel";


function BuyPanelsFlexBox() {
    const [panels, setPanels] = useState<BuyPanelParams[]>([]);

    useEffect(() => {
        setPanels([{provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, amountYouOwn: 100, winThisMonth: 13, totalWin: 100},
            {provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, amountYouOwn: 100, winThisMonth: 13, totalWin: 100},
            {provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, amountYouOwn: 100, winThisMonth: 13, totalWin: 100},
            {provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, amountYouOwn: 100, winThisMonth: 13, totalWin: 100},
            {provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, amountYouOwn: 100, winThisMonth: 13, totalWin: 100}]);
    }, [])
    return (
        <div className="container">

            {panels.map(panel => <div className="item" key={panel.provider + panel.amountYouOwn}><InvestmentCardPanel {...panel} /></div>)}

        </div>
    );
}

export default BuyPanelsFlexBox