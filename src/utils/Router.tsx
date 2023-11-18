import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from "../App.tsx";
import RegsitrationBox from "../components/registration_box/RegsitrationBox.tsx";
import {useState} from "react";

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

interface Values {
    region: string,
    age: number,
    size: number,
    totalAmount: number,
    availableAmount: number,
    kWhUnit: number,

}

function Routing() {
    const [value, setValue] = useState<Values | null>(null);
    return (
        <BrowserRouter basename={getPathname()}>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/test" element={<RegsitrationBox setValues={setValue}/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default Routing;