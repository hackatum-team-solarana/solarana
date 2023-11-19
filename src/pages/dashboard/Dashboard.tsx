import background from "../../assets/media/background.jpeg";
import SemiDonutChart from "../../components/semi_donut_chart/SemiDonutChart.tsx";
import {useState} from "react";
import { Button, Heading, Text} from "@radix-ui/themes";
import InvestmentCardPanelsFlexBox from "../../components/investments_card/InvestmentCardPanelsFlexBox.tsx";
import RegistrationBox from "../../components/registration_box/RegsitrationBox.tsx";
import {Buffer} from 'buffer';


window.Buffer = Buffer;
import './styleDashboard.css';
import {useNavigate} from "react-router-dom";
import Profile from "../../components/avatar/Profile.tsx";
import AvatarInformation from "../../components/dropdown_menu/AvatarInformation.tsx";

interface Values {
    region: string,
    age: number,
    size: number,
    availableAmount: number,
    kWhUnit: number,
    pricePerUnit: number,
}



function Dashboard() {
    const [currentVal, ] = useState(950);
    const [, setNewPanel] = useState<Values | null>(null);
    const navigate = useNavigate();

    const goToPageOnClick = () => {
        navigate("/buy")
    }

    return (
        <main style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            width: "100vw",
        }}>
            <div
                style={{
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
                        <RegistrationBox setValues={setNewPanel}/>
                        <Button onClick={() => goToPageOnClick()} className="goToBuyButton">
                            buy more units
                        </Button>
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
            <AvatarInformation>
                <Profile/>
            </AvatarInformation>
        </main>
    );
}

export default Dashboard;
