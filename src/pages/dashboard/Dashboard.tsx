import background from "../../assets/media/background.jpeg";
import SemiDonutChart from "../../components/semi_donut_chart/SemiDonutChart.tsx";
import {useState} from "react";
import {Text} from "@radix-ui/themes";

function Dashboard() {
    const [currentVal, setCurrentVal] = useState(200);
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
                    minHeight: "80vw",
                    borderRadius: "20px 20px 0 0",
                }}>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;