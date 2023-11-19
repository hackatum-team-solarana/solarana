import { Button } from "@radix-ui/themes";
import {useNavigate} from "react-router-dom";
import "./styleErrorPage.css"

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{display: "flex", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <p style={{fontWeight: "bold", fontSize: "60px", margin: 0}}>404</p>
                <h1 style={{margin: 0}}>Page not found</h1>
                <p>The site you were looking for, doesn't exist.</p>
                <Button className={"BackToHomeButton1"} onClick={() => {
                    navigate("/");
                }}>Back to home page</Button>
            </div>
        </div>
    )
};

export default ErrorPage;
