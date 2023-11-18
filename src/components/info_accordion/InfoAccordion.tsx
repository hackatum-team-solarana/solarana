// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import {ChevronDownIcon} from '@radix-ui/react-icons';
import './styleInfoAccordion.css';

const AccordionDemo = () => (
    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>What is Solarana?</AccordionTrigger>
            <AccordionContent>
                Introducing SolarTokens on Solana: a fusion of renewable energy and blockchain. SolarTokens represent
                ownership of solar power generated by specific panels, traded on the efficient and low-cost Solana
                blockchain. This innovative system allows for transparent and traceable transactions, democratizing
                access to clean energy investments. Join the SolarToken marketplace to trade digital assets,
                contributing to a more sustainable and equitable energy future.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>What is Solana</AccordionTrigger>
            <AccordionContent>
                Solana, a high-performance blockchain, has rapidly emerged as a cornerstone of the decentralized
                landscape. Known for its lightning-fast transaction speeds and low fees, Solana offers a seamless and
                efficient platform for a myriad of decentralized applications. Its unique consensus mechanism, Proof of
                History, ensures chronological order and enhances overall scalability.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>How can I start</AccordionTrigger>
            <Accordion.Content className="AccordionContent">
                <div className="AccordionContentText">
                    Choose a Solana-compatible wallet. Popular choices include Sollet, Phantom, and Solflare.
                    Create an account and securely store your recovery phrase. This phrase is crucial for accessing your
                    funds and should be kept private. <br/><br/>
                    What can I do if I don't have a wallet yet? <br/>
                    1. Install the phantom extention <a target="_blank" rel="noopener noreferrer" href="https://phantom.app">phantom wallet</a> <br/>
                    2. Create a wallet <br/>
                    3. Accept the connection
                </div>
            </Accordion.Content>
        </Accordion.Item>

    </Accordion.Root>


);

const AccordionTrigger = React.forwardRef(({children, className, ...props}, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={classNames('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden/>
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({children, className, ...props}, forwardedRef) => (
    <Accordion.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));

export default AccordionDemo;