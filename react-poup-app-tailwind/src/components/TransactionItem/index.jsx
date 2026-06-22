const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const TransactionItem = ({ item }) => {

    const detailsAddClassName = item.value >= 0 ? "text-secondary-income" : "text-secondary-expense"

    return (
        <div className="flex justify-between items-center">
            <div className={`flex flex-col gap-2 font-[15px] leading-[120%] font-medium ${detailsAddClassName}`}>
                <p className="m-0">{item.description}</p>
                <p className="m-0">{formater.format(item.value)}</p>
            </div>

            <div className="text-neutral-text font-[14px] leading-5">
                {new Date(item.date).toLocaleDateString('pt-BR')}
            </div>
        </div>
    )
}