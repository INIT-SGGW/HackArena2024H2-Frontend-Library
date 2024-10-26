import './Button.css'
import { useEffect, useRef } from 'react'

interface ButtonProps {
    children: string
    className: string
    disabled?: boolean
    backgroundColor?: string
    type?: "submit" | "button"
    width?: string
    border?: boolean
    onClick: () => void
}

function Button({ children, className, width, backgroundColor, disabled = false, type = "button", border = false, onClick }: ButtonProps) {
    const buttonDivRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (buttonDivRef.current && buttonRef.current) {
            buttonRef.current.style.width = `${buttonDivRef.current.offsetWidth}px`;
        }
    }, [buttonDivRef.current?.offsetWidth, buttonRef])

    return (
        <div className={`button${disabled ? " not-clickable" : ""}`} style={{ width }} ref={buttonDivRef}>
            <button type={type} disabled={disabled} style={{ backgroundColor: backgroundColor, borderColor: backgroundColor }} className={`${className}${disabled ? " button--disabled" : ""}`} onClick={(e) => { e.stopPropagation(); onClick() }}>{children}</button>
            <div className={`button__double${disabled ? " hidden" : ""}`}>
                <button
                    type={type}
                    disabled={disabled}
                    style={{ borderColor: backgroundColor, color: backgroundColor }}
                    className={`${className}${border ? "-border" : ""}-hover`}
                    onClick={(e) => { e.stopPropagation(); onClick() }}
                    ref={buttonRef}
                >
                    {children}
                </button>
            </div>
        </div>
    )
}

export default Button