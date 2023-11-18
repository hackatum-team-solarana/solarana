import background from '../../assets/media/background.jpeg';
import logo from '../../assets/media/solana-sol-logo.png';
import {Button, Heading} from "@radix-ui/themes";
import InfoAccordion from "../../components/info_accordion/InfoAccordion.tsx";
import {WalletModalButton} from "@solana/wallet-adapter-react-ui";
import {useWallet} from "@solana/wallet-adapter-react";
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    const {connected} = useWallet();

    if (connected) {
        navigate("/dashboard");
    }
    return (
        <main style={{backgroundImage: `url(${background})`, height: "100vh", width: "100vw"}}>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    display: "flex",
                    flexDirection: "row-reverse",
                }}>
                <div style={{
                    height: "100vh",
                    width: "600px",
                    backgroundColor: "white",
                    opacity: "1",
                    borderRadius: "20px 0 0 20px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "50px"
                    }}>
                        <Heading style={{fontSize: "100px"}}>
                            Solarana
                        </Heading>
                        <img src={logo} alt={"solana-logo"} style={{height: "100px", width: "100px"}}/>
                    </div>
                    <div style={{"width": "600px", display: "flex", justifyContent: "center", marginTop: "50px"}}>
                        <InfoAccordion/>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", marginTop: "100px", gap: "50px"}}>
                        <WalletModalButton style={{
                            backgroundColor: "black",
                            width: "150px",
                            height: "50px",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            Login
                        </WalletModalButton>
                        <Button style={{backgroundColor: "#009989", width: "200px", height: "50px", opacity: "50%"}}
                                onClick={() => window.location.href = "/login"}>
                            More Information
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;