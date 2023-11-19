import { useEffect, useState } from "react";
import "./styleInvestmentCardPanelsFlexBox.css";
import InvestmentCardPanel, {BuyPanelParams} from "./InvestmentCardPanel";


function BuyPanelsFlexBox() {
    const [panels, setPanels] = useState<BuyPanelParams[]>([]);

    useEffect(() => {
        setPanels(
            [
                {id: 1, provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, amountYouOwn: 100, winThisMonth: 13, totalWin: 100},
                {id: 2, provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, amountYouOwn: 100, winThisMonth: 13, totalWin: 100},
                {id: 3, provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, amountYouOwn: 100, winThisMonth: 13, totalWin: 100},
                {id: 4, provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, amountYouOwn: 100, winThisMonth: 13, totalWin: 100},
                {id: 5, provider: "Hans Müller", region: "Bayern", ageInYears: 0, powerPerUnit: 1111, amountYouOwn: 100, winThisMonth: 13, totalWin: 100}
            ]);
    }, [])
    return (
        <div className="container">

            {panels.map(panel => <div className="item" key={panel.id}><InvestmentCardPanel {...panel} /></div>)}

        </div>
    );
}

export default BuyPanelsFlexBox;
