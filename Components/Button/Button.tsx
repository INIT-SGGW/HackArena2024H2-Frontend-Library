import { useEffect, useRef } from 'react'
import './Button.css'

interface ButtonProps {
    children: string
    className: string
    disabled?: boolean
    type?: "submit" | "button"
    width?: string
    border?: boolean
    onClick: () => void
}

function Button({ children, className, width, disabled = false, type = "button", border = false, onClick }: ButtonProps) {
    const buttonDivRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (buttonDivRef.current && buttonRef.current) {
            buttonRef.current.style.width = `${buttonDivRef.current.offsetWidth}px`;
        }
    }, [buttonDivRef.current?.offsetWidth, buttonRef])

    return (
        <div className={`button${disabled ? " not-clickable" : ""}`} style={{ width }} ref={buttonDivRef}>
            <button type={type} disabled={disabled} className={`${className}${disabled ? " button--disabled" : ""}`} onClick={onClick}>{children}</button>
            <div className={`button__double${disabled ? " hidden" : ""}`}>
                <button
                    type={type}
                    disabled={disabled}
                    className={`${className}${border ? "-border" : ""}-hover`}
                    onClick={onClick}
                    ref={buttonRef}
                >
                    {children}
                </button>
            </div>
        </div>
    )
}

export default Button