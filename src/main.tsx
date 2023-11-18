import React from 'react'
import ReactDOM from 'react-dom/client'
import '@radix-ui/themes/styles.css';
import './index.css'
import {Theme} from '@radix-ui/themes';
import Router from './utils/Router.tsx';
import {Wallet} from "./utils/Wallet.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Theme appearance="light" accentColor="teal" panelBackground="solid">
            <Wallet>
                <Router/>
            </Wallet>
        </Theme>
    </React.StrictMode>,
)
