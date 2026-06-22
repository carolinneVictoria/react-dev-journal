import { Button } from "../Button"
import { IconCurrency } from "../Icons"
import { TransactionItem } from "../TransactionItem"

export const Transactions = () => {
    const items = [
        { "description": "iFood", "value": -20, "date": "2024-10-01T00:00:00-03:00" },
        { "description": "Papelaria Mila", "value": -80, "date": "2024-10-03T00:00:00-03:00" },
        { "description": "Freela (2ª parte)", "value": 1000, "date": "2024-10-03T00:00:00-03:00" },
        { "description": "Magazine Luiza", "value": -300, "date": "2024-10-05T00:00:00-03:00" }
    ]

    return (
        <>
        <ul className="p-0 m-0 mb-12 list-none">
            {items.map((transactionItem, index) => {
                return (
                    <li className="border-b border-neutral-header pb-4 mb-4 last:border-none last:pb-0 last:mb-0" key={index}>
                        <TransactionItem item={transactionItem}/>
                    </li>
                )
            })}
        </ul>

        <div className="flex justify-center">
            <Button>
                <IconCurrency /> Adicionar transação
            </Button>
        </div>
        </>
    )
}