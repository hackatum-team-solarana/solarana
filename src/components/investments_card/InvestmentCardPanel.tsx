import { Text, Flex} from "@radix-ui/themes";
import PricePerUnit from "./InvestmentCardPricePerUnit.tsx";
import "./styleInvestmentCardPanel.css";


interface BuyPanelParams  {
    id: number,
    provider: string,
    region: string,
    ageInYears: number,
    powerPerUnit: number,
    amountYouOwn: number,
    winThisMonth:number,
    totalWin:number,
}


function BuyPanel(props: BuyPanelParams) {
    const {provider, region, ageInYears, powerPerUnit, amountYouOwn, winThisMonth, totalWin} = props;
    return (
        <div className="wrap">
            <h4><Text>Solarpanel</Text></h4>
            <Flex gap="3" align="center">
                <div className="grid-container">

                    <div className="grid-item-above">
                        <div className="grid-container">

                            <div className="grid-item"></div>
                            <div className="grid-item"></div>

                            <div className="grid-item"><Text size="2">provider:</Text></div>
                            <div className="grid-item"><Text size="2">{ provider }</Text></div>

                            <div className="grid-item"><Text size="2">region:</Text></div>
                            <div className="grid-item"><Text size="2">{ region }</Text></div>

                            <div className="grid-item"><Text size="2">age in years:</Text></div>
                            <div className="grid-item"><Text size="2">{ ageInYears }</Text></div>

                            <div className="grid-item"><Text size="2">kWh/unit:</Text></div>
                            <div className="grid-item"><Text size="2">{ powerPerUnit }</Text></div>

                            <div className="grid-item"><Text size="2">amount you own:</Text></div>
                            <div className="grid-item"><Text size="2">{ amountYouOwn }</Text></div>

                        </div>
                    </div>

                    <div className="grid-item-above">
                        <PricePerUnit winThisMonth={winThisMonth} totalWin={totalWin}/>
                    </div>

                </div>
            </Flex>
        </div>
    );
}

export default BuyPanel
export type { BuyPanelParams }
