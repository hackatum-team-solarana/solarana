// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {Dispatch, SetStateAction} from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import {CheckIcon, ChevronDownIcon, ChevronUpIcon} from '@radix-ui/react-icons';
import './DropdownFilterBox.css';


function DropdownFilterBox(props: { setRegion: Dispatch<SetStateAction<string | null>> }) {

    const bundeslaender = [
        null,
        "Baden-Württemberg",
        "Bayern",
        "Berlin",
        "Brandenburg",
        "Bremen",
        "Hamburg",
        "Hessen",
        "Mecklenburg-Vorpommern",
        "Niedersachsen",
        "Nordrhein-Westfalen",
        "Rheinland-Pfalz",
        "Saarland",
        "Sachsen",
        "Sachsen-Anhalt",
        "Schleswig-Holstein",
        "Thüringen"
    ]

    const {setRegion} = props;
    const SelectItem = React.forwardRef(({children, className, ...props}, forwardedRef) => {
        return (
            <div onClick={() => setRegion(className)}>
                <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
                    <Select.ItemText>{children}</Select.ItemText>
                    <Select.ItemIndicator className="SelectItemIndicator">
                        <CheckIcon/>
                    </Select.ItemIndicator>
                </Select.Item>
            </div>
        );
    });

    return (
        <Select.Root onValueChange={(e => setRegion(e))}>
            <Select.Trigger className="SelectTrigger" aria-label="Region">
                <Select.Value placeholder="Select a region…"/>
                <Select.Icon className="SelectIcon">
                    <ChevronDownIcon/>
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className="SelectContent">
                    <Select.ScrollUpButton className="SelectScrollButton">
                        <ChevronUpIcon/>
                    </Select.ScrollUpButton>
                    <Select.Viewport className="SelectViewport">
                        <Select.Group>
                            <Select.Label className="SelectLabel">Germany</Select.Label>
                            <Select.Separator className="SelectSeparator"/>
                            {bundeslaender.map(bundesland =>
                                <SelectItem key={bundesland} value={bundesland}>{bundesland}</SelectItem>
                            )}
                        </Select.Group>
                        <Select.Separator className="SelectSeparator"/>

                    </Select.Viewport>
                    <Select.ScrollDownButton className="SelectScrollButton">
                        <ChevronDownIcon/>
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}

export default DropdownFilterBox;
