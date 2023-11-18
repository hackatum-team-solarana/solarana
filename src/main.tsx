import React from 'react'
import ReactDOM from 'react-dom/client'
import '@radix-ui/themes/styles.css';
import './index.css'
import {Theme} from '@radix-ui/themes';
import Router from './utils/Router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
            <Router/>
        </Theme>
    </React.StrictMode>,
)
