import React, { useEffect, useRef } from 'react';
import './dialog.style.css';

export function Dialog({ isOpen, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [isOpen]);

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
                <button autoFocus onClick={onClose}>Close</button>
                <p>Dialog content goes here.</p>
            </dialog>
        </>
    )
}