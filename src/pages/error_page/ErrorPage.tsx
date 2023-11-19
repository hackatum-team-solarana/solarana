import { Button } from "@radix-ui/themes";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div >
                <h1>Page not found</h1>
                <p>The site you were looking for, doesn't exist.</p>
                <Button className={"BackToHomeButton1"} onClick={() => {
                    navigate("/");
                }}>Back to home page</Button>
            </div>
        </div>
    )
};

export default ErrorPage;
