import { useEffect, useState } from "react";
import "./styleInvestmentCardPanelsFlexBox.css";
import InvestmentCardPanel, {BuyPanelParams} from "./InvestmentCardPanel";


function BuyPanelsFlexBox() {
    const [panels, setPanels] = useState<BuyPanelParams[]>([]);

    useEffect(() => {
        setPanels(
            [
                {id: 1, provider: "js9Em...", region: "Bayern", ageInYears: 0, powerPerUnit: 10, amountYouOwn: 30, winThisMonth: 32, totalWin: 278},
                {id: 2, provider: "Mq97b...", region: "Berlin", ageInYears: 5, powerPerUnit: 3, amountYouOwn: 44, winThisMonth: 40, totalWin: 80},
                {id: 3, provider: "9U6Q0...", region: "Thüringen", ageInYears: 2, powerPerUnit: 5, amountYouOwn: 10, winThisMonth: 22, totalWin: 160},
                {id: 4, provider: "leJ65...", region: "Saarland", ageInYears: 1, powerPerUnit: 8, amountYouOwn: 25, winThisMonth: 35, totalWin: 231},
                {id: 5, provider: "Kl4G1...", region: "Hamburg", ageInYears: 8, powerPerUnit: 6, amountYouOwn: 5, winThisMonth: 18, totalWin: 127}
            ]);
    }, [])
    return (
        <div className="container">

            {panels.map(panel => <div className="item" key={panel.id}><InvestmentCardPanel {...panel} /></div>)}

        </div>
    );
}

export default BuyPanelsFlexBox;
