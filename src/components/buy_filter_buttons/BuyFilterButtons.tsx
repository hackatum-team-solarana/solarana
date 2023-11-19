import "./BuyFilterButtons.css"

import * as Dialog from '@radix-ui/react-dialog';
import {Cross2Icon} from '@radix-ui/react-icons';
import DropdownFilterBox from "./DropdownFIlterBox";
import {useState} from "react";
import {Text} from "@radix-ui/themes";



function BuyFilterButtons(props : {
        setRegion: React.Dispatch<React.SetStateAction<string | null>>, 
        ageRef: React.Ref<HTMLInputElement>, 
        priceRef: React.Ref<HTMLInputElement>,
        powerRef: React.Ref<HTMLInputElement>
    }){
   
    const {setRegion, ageRef, priceRef, powerRef} = props; 

    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<string | null>()


    const handleClick = () => {
        setError(null);

      
        setOpen(false);
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button className="ButtonFilterKlapp">Filter</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay"/>
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">Set search filter</Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                        customize the search filter
                    </Dialog.Description>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="region">
                            Region
                        </label>
                        <DropdownFilterBox setRegion={setRegion}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="age">
                            Maximum Age 
                        </label>
                        {/* TODO slider for maximum / minimum age */}
                        <input className="Input" id="age" defaultValue="" ref={ageRef}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="size">
                            Maximum Price
                        </label>
                        {/* TODO slider for maximum / minimum price */}
                        <input className="Input" id="size" defaultValue="" ref={priceRef}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="total amount">
                            Minimum kWh/unit
                        </label>
                        {/* TODO slider for maximum / minimum power */}
                        <input className="Input" id="total amount" defaultValue="" ref={powerRef}/>
                    </fieldset>
        
                    {error && <Text style={{color: "red"}}>{error}</Text>}
                    <div style={{display: 'flex', marginTop: 25, justifyContent: 'flex-end'}}>
                        <button onClick={() => handleClick()} className="Button green">Search</button>
                    </div>
                    <button onClick={() => setOpen(false)} className="IconButton" aria-label="Close">
                        <Cross2Icon/>
                    </button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default BuyFilterButtons