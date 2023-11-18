import * as Dialog from '@radix-ui/react-dialog';
import {Cross2Icon} from '@radix-ui/react-icons';
import './styleRegistrationBox.css';
import DropdownRegistrationBox from "./DropdownRegistrationBox.tsx";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import {Text} from "@radix-ui/themes";

interface Values {
    region: string,
    age: number,
    size: number,
    totalAmount: number,
    availableAmount: number,
    kWhUnit: number,
}


function RegistrationBox(props: { setValues: Dispatch<SetStateAction<Values | null>> }) {
    const {setValues} = props;

    const [region, setRegion] = useState<string | null>(null);
    const ageRef = useRef<HTMLInputElement | null>(null);
    const sizeRef = useRef<HTMLInputElement | null>(null);
    const totalAmountRef = useRef<HTMLInputElement | null>(null);
    const availableAmountRef = useRef<HTMLInputElement | null>(null);
    const kWhUnitRef = useRef<HTMLInputElement | null>(null);


    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<string | null>()


    const handleClick = () => {
        setError(null);
        setRegion(null);


        if (region === null) {
            setError("You have to select a region!");
            return;
        }

        if (!ageRef.current?.value || !Number.isInteger(Number(ageRef.current?.value))) {
            setError("Age has to be a value without decimals!");
            return;
        }

        if (!totalAmountRef.current?.value || !Number.isInteger(Number(totalAmountRef.current?.value))) {
            setError("Total Amount has to be a value without decimals!");
            return;
        }

        if (!availableAmountRef.current?.value || !Number.isInteger(Number(availableAmountRef.current?.value))) {
            setError("Available Amount has to be a value without decimals!");
            return;
        }


        if (!sizeRef.current?.value || !parseFloat(sizeRef.current?.value)) {
            setError("Size has to be a value!");
            return;
        }

        if (!kWhUnitRef.current?.value || !parseFloat(kWhUnitRef.current?.value)) {
            setError("kWh/unit has to be a value!");
            return;
        }
        setValues(
            {
                region: region,
                age: Number(ageRef.current?.value),
                size: parseFloat(sizeRef.current?.value),
                totalAmount: Number(totalAmountRef.current?.value),
                availableAmount: Number(availableAmountRef.current?.value),
                kWhUnit: parseFloat(kWhUnitRef.current?.value),
            }
        )
        setOpen(false);

    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
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
                        <DropdownRegistrationBox setRegion={setRegion}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="age">
                            Age in years
                        </label>
                        <input className="Input" id="age" defaultValue="" ref={ageRef}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="size">
                            Size
                        </label>
                        <input className="Input" id="size" defaultValue="" ref={sizeRef}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="total amount">
                            Total Amount
                        </label>
                        <input className="Input" id="total amount" defaultValue="" ref={totalAmountRef}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="available amount">
                            Available Amount
                        </label>
                        <input className="Input" id="available amount" defaultValue="" ref={availableAmountRef}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="kwh/unit">
                            kWh/unit
                        </label>
                        <input className="Input" id="kwh/unit" defaultValue="" ref={kWhUnitRef}/>
                    </fieldset>
                    {error && <Text style={{color: "red"}}>{error}</Text>}
                    <div style={{display: 'flex', marginTop: 25, justifyContent: 'flex-end'}}>
                        <button onClick={() => handleClick()} className="Button green">Register</button>
                    </div>
                    <button onClick={() => setOpen(false)} className="IconButton" aria-label="Close">
                        <Cross2Icon/>
                    </button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default RegistrationBox;
