import { AccountItem } from "../../../../react-poup-app/src/components/AccountItem"
import { Button } from "../Button"
import { IconBank } from "../Icons"

export const Account = () => {
        const items = [
            { "bank": "Anybank", "balance": 1200 },
            { "bank": "Bytebank", "balance": 800 },
            { "bank": "Switch Bank", "balance": 1800 }
        ]
        
            return (
        <>
            <ul className="p-0 m-0 mb-12 list-none text-neutral-text">
                {items.map((accountItem, index) => {
                    return (
                        <li className="border-b border-neutral-header pb-4 mb-4 last:border-none last:pb-0 last:mb-0" key={index}>
                            <AccountItem item={accountItem} />
                        </li>

                    )
                })}
            </ul>
            <div className="flex justify-center">
                <Button>
                    <IconBank /> Adicionar conta
                </Button>
            </div>
        </>
    )
}