import background from "../../assets/background.jpeg";
import BuyPanelsFlexBox from "../../components/buy_panels_flex_box/BuyPanelsFlexBox";
import './Buy.css'
import Profile from "../../components/avatar/Profile.tsx";
import AvatarInformation from "../../components/dropdown_menu/AvatarInformation.tsx";


function Buy() {

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
                </div>
                <div style={{
                    position: "absolute",
                    display: "flex",
                    width: "100vw",
                    justifyContent: "center",
                    marginTop: "16%",
                }}>
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
                    </div>

                    <div style={{marginTop: "10px"}}>
                        <BuyPanelsFlexBox />
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

export default Buy