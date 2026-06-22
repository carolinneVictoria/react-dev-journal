import { IconBank } from '../Icons'

const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const AccountItem = ({ item }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2 text-[15px] leading-[120%] font-medium">
                <IconBank/> <p className='m-0 text-neutral-text'>{item.bank}</p>
            </div>

            <div className="text-neutral-text text-[14px] leading-[20px] flex justify-items-start flex-col">
                <p className="m-0 text-neutral-text">Saldo</p>
                <p className='m-0 text-neutral-text'>{formater.format(item.balance)}</p>
            </div>

        </div>
    )
}