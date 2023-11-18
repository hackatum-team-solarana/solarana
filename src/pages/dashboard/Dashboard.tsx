// @ts-ignore

import background from "../../assets/media/background.jpeg";
import SemiDonutChart from "../../components/semi_donut_chart/SemiDonutChart.tsx";
import {useState} from "react";
import {Heading, Text} from "@radix-ui/themes";
import InvestmentCardPanelsFlexBox from "../../components/investments_card/InvestmentCardPanelsFlexBox.tsx";
import RegistrationBox from "../../components/registration_box/RegsitrationBox.tsx";
import { Buffer } from 'buffer';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
window.Buffer = Buffer;

interface Values {
    region: string,
    age: number,
    size: number,
    totalAmount: number,
    availableAmount: number,
    kWhUnit: number,
}

function Dashboard() {
    const [currentVal, _setCurrentVal] = useState(200);
    const [_newPanel, setNewPanel] = useState<Values | null>(null);


    return (
        <main style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
        }}>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    display: "flex",
                    flexDirection: "row-reverse",
                }}>
                <div style={{
                    position: "absolute",
                    display: "flex",
                    width: "100vw",
                    justifyContent: "center",
                    marginTop: "3%",
                }}>
                    <SemiDonutChart profit={90} invest={10}/>
                </div>
                <div style={{
                    position: "absolute",
                    display: "flex",
                    width: "100vw",
                    justifyContent: "center",
                    marginTop: "16%",
                }}>
                    <Text style={{fontWeight: "bold", color: "#03b4a8", fontSize: "80px"}}>{currentVal} $</Text>
                </div>
                <div style={{
                    marginTop: "20%",
                    width: "100vw",
                    backgroundColor: "white",
                    minHeight: "55vw",
                    borderRadius: "20px 20px 0 0",
                }}>
                    <div style={{
                        marginTop: "30px",
                        display: "flex",
                        flexDirection: "row-reverse",
                        borderRight: "30px solid transparent"
                    }}>
                        <RegistrationBox setValues={setNewPanel} />
                    </div>
                    <Heading size={"8"} weight={"bold"} style={{paddingLeft: "30px"}}>
                        My Investments:
                    </Heading>
                    <div style={{marginTop: "10px"}}>
                        <InvestmentCardPanelsFlexBox/>
                    </div>
                    <div style={{height: "40px"}}/>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
