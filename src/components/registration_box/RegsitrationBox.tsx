import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styleRegistrationBox.css';
import DropdownRegistrationBox from "./DropdownRegistrationBox.tsx";

function RegistrationBox() {

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="Button violet">Register your solar panel</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay"/>
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">Register your solar panel</Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                        Register your solar panel here and click register when you're done!
                    </Dialog.Description>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="region">
                            Region
                        </label>
                        <DropdownRegistrationBox />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="age">
                            Age in years
                        </label>
                        <input className="Input" id="age" defaultValue=""/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="size">
                            Size
                        </label>
                        <input className="Input" id="size" defaultValue=""/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="total amount">
                            Total Amount
                        </label>
                        <input className="Input" id="total amount" defaultValue=""/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="available amount">
                            Available Amount
                        </label>
                        <input className="Input" id="available amount" defaultValue=""/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="kwh/unit">
                            kWh/unit
                        </label>
                        <input className="Input" id="kwh/unit" defaultValue=""/>
                    </fieldset>
                    <div style={{display: 'flex', marginTop: 25, justifyContent: 'flex-end'}}>
                        <Dialog.Close asChild>
                            <button className="Button green">Register</button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            <Cross2Icon/>
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default RegistrationBox;