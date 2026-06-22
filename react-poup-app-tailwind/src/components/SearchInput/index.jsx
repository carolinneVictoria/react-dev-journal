import { IconSearch } from "../Icons"

export const SearchInput = (props) => {
    return (
        <div className="flex itens-center bg-neutral-header py-3 px-4 gap-4 rounded-lg">
            <IconSearch />
            <input type="text" className="w-full text-neutral-text text-[20] leading-[125%]"{...props} />
        </div>
    )
}