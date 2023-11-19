import {useEffect, useRef, useState} from "react";
import BuyPanel from "../buy_panel/BuyPanel";
import {BuyPanelParams} from "../buy_panel/BuyPanel";
import "./BuyPanelsFlexBox.css";
import BuyFilterButtons from "../buy_filter_buttons/BuyFilterButtons";
import {Bundesland, Configuration, ConfigurationParameters, MessageApi} from "../../api";

function BuyPanelsFlexBox() {
    const [panels, setPanels] = useState<BuyPanelParams[]>([]);

    const [region, setRegion] = useState<string | null>(null);
    const ageRef = useRef<HTMLInputElement | null>(null);
    const priceRef = useRef<HTMLInputElement | null>(null);
    const powerRef = useRef<HTMLInputElement | null>(null);

    const parameters: ConfigurationParameters = {basePath: "https://api-solarana.sokutan.de"};
    const config = new Configuration(parameters);
    const messageApi = new MessageApi(config);

    useEffect(() => {
        const ageRefValue = Number(ageRef.current?.value);
        const priceRefValue = Number(priceRef.current?.value);
        const powerRefValue = Number(powerRef.current?.value);

        messageApi.getOfferMarketplaceOrderGet(
            isNaN(ageRefValue) ? null : ageRefValue,
            isNaN(priceRefValue) ? null : priceRefValue,
            isNaN(powerRefValue) ? null : powerRefValue,
            region as Bundesland
        ).then(response => {
            if (response.status === 200) {
                setPanels(response.data.map(panel => ({
                    provider: panel.owner_pk.substring(0, 5) + "...",
                    region: panel.region,
                    ageInYears: panel.age,
                    powerPerUnit: panel.power,
                    totalAmount: panel.amount,
                    availableAmount: 100,
                    price: panel.price,
                })));
            }
        });
    }, [])

    return (
        <div>
            <div style={{textAlign: "center"}}>
                <BuyFilterButtons setRegion={setRegion} ageRef={ageRef} priceRef={priceRef} powerRef={powerRef}/>
            </div>
            <div className="container-buy">
                {panels.map(panel => <div className="item-buy"><BuyPanel {...panel} /></div>)}

            </div>
        </div>
    );
}

export default BuyPanelsFlexBox