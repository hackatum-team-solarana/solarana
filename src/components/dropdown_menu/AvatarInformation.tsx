import React from 'react';
import './styleDropdownMenu.css';
import {useWallet} from "@solana/wallet-adapter-react";
import {Button, Heading, Text} from "@radix-ui/themes";
import {useNavigate} from "react-router-dom";

function AvatarInformation(props: { children: React.ReactNode }) {
    const {disconnect, publicKey} = useWallet();
    const navigate = useNavigate();

    const [show, setShow] = React.useState(false);

    if (!publicKey) {
        return null;
    }
    // Build a custom dropdown
    return (
        <div style={{position: "absolute", top: "20px", left: "20px"}} onClick={() => setShow(!show)}>
            {props.children}
            <span className="css-dreieck" style={show ? {} : {display: "none"}}></span>
            <div style={{
                width: "300px",
                height: "400px",
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                zIndex: 10,
                display: show ? "block" : "none",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "10px",
                }}>
                    <Heading style={{marginTop: "30px"}}>Current Hash</Heading>
                    <Text style={{
                        fontWeight: "bold",
                        textOverflow: "hidden",
                        width: "200px",
                        marginTop: "50px"
                    }}>{publicKey?.toJSON()}</Text>
                    <Button className={"logoutButton"}
                            onClick={async () => {
                                await disconnect();
                                localStorage.clear();
                                sessionStorage.clear();
                                navigate("/");
                            }}>
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default AvatarInformation;