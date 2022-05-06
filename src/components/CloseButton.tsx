import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"

export function CloseButton(){
    return(
        <Popover.Button className='top-5 right-2 absolute text-zinc-500 hover:text-zinc-100' title="Fechar Formulário de Feedback">
            <X className="w-4 h-4" weight="bold"/>
        </Popover.Button>
    )
}