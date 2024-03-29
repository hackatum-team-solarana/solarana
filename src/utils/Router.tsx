import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from "../pages/landing_page/LandingPage.tsx";
import {useWallet} from "@solana/wallet-adapter-react";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import Buy from '../pages/buy/Buy.tsx';
import ErrorPage from '../pages/error_page/ErrorPage.tsx';


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
    const {connected} = useWallet();
    return (
        <BrowserRouter basename={getPathname()}>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                {connected && (
                    <>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/buy" element={<Buy/>}/>
                    </>
                )}
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
