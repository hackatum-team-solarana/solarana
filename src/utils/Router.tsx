import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from "../App.tsx";
import {Wallet} from "./Wallet.tsx";

/**
 * Returns the pathname of the current Base URL
 * @return {string} The pathname
 */
const getPathname = () => {
    const parser = document.createElement('a');
    parser.href = import.meta.env.BASE_URL;
    return parser.pathname;
};

/**
 * Implementations of the Router.
 * @return {JSX.Element} The Router
 */
function Routing() {
    return (
        <BrowserRouter basename={getPathname()}>
            <Routes>
                <Wallet>
                    <Route path="/" element={<App/>}/>
                </Wallet>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;