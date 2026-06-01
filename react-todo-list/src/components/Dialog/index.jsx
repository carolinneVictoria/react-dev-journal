import React, { useRef } from 'react';
import './dialog.style.css';

export function Dialog() {
    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };
    return (
        // '//' funciona como uma div
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={closeDialog}>Close</button>
                <p>Dialog content goes here.</p>
            </dialog>
            <button onClick={openDialog}>Show the dialog</button>
        </>
    )
}