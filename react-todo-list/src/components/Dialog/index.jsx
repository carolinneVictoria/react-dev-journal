export function Dialog() {
    return(
        // '//' funciona como uma div
        <>
            <dialog>
                <button autofocus>Close</button>
                <p>Dialog content goes here.</p>
            </dialog>
            <button>Show the dialog</button>
        </>
    )
}