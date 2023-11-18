// @ts-nocheck
import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import {CheckIcon, ChevronDownIcon, ChevronUpIcon} from '@radix-ui/react-icons';
import './styleDropdownRegistrationBox.css';

function DropdownRegistrationBox() {

    const SelectItem = React.forwardRef(({children, className, ...props}, forwardedRef) => {
        return (
            <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
                <Select.ItemText>{children}</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                    <CheckIcon/>
                </Select.ItemIndicator>
            </Select.Item>
        );
    });

    return (
        <Select.Root>
            <Select.Trigger className="SelectTrigger" aria-label="Food">
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
                            <SelectItem value="Baden-Württemberg">Baden-Württemberg</SelectItem>
                            <SelectItem value="Bayern">Bayern</SelectItem>
                            <SelectItem value="Berlin">Berlin</SelectItem>
                            <SelectItem value="Brandenburg">Brandenburg</SelectItem>
                            <SelectItem value="Bremem">Bremem</SelectItem>
                            <SelectItem value="Hamburg">Hamburg</SelectItem>
                            <SelectItem value="Hessen">Hessen</SelectItem>
                            <SelectItem value="Mecklenburg-Vorpommern">Mecklenburg-Vorpommern</SelectItem>
                            <SelectItem value="Niedersachsen">Niedersachsen</SelectItem>
                            <SelectItem value="Nordrhein-Westfalen">Nordrhein-Westfalen</SelectItem>
                            <SelectItem value="Rheinland-Pfalz">Rheinland-Pfalz</SelectItem>
                            <SelectItem value="Saarland">Saarland</SelectItem>
                            <SelectItem value="Sachsen">Sachsen</SelectItem>
                            <SelectItem value="Sachsen-Anhalt">Sachsen-Anhalt</SelectItem>
                            <SelectItem value="Schleswig-Holstein">Schleswig-Holstein</SelectItem>
                            <SelectItem value="Thüringen">Thüringen</SelectItem>
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

export default DropdownRegistrationBox;