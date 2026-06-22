export const Button = ({ children, ...props }) => {
    return (
        <button {...props}
        className="bg-transparent text-neutral-text flex items-center justify-center gap-2 rounded-3xl
                    pt-3 pb-3 pr-6 pl-6 text-base leading-[120%] border border-neutral-text
                    cursor-pointer hover:opacity-80">
            {children}
        </button>
    )
}