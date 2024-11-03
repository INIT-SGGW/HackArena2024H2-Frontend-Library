import './LinkButton.css'
import { useEffect, useRef } from 'react'

interface LinkButtonProps {
    children: string
    className: string
    link: string
    backgroundColor?: string
    width?: string
    border?: boolean
}

function LinkButton({ children, className, width, backgroundColor, border = false, link }: LinkButtonProps) {
    const buttonDivRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (buttonDivRef.current && buttonRef.current) {
            buttonRef.current.style.width = `${buttonDivRef.current.offsetWidth}px`;
        }
    }, [buttonDivRef.current?.offsetWidth, buttonRef])

    return (
        <div className={`anchor`} style={{ width }} ref={buttonDivRef}>
            <a
                style={{ backgroundColor: backgroundColor, borderColor: backgroundColor }}
                href={link}
                target='_blank'
                className={`${className}`}>{children}</a>
            <div className={`anchor__double`}>
                <a
                    href={link}
                    target='_blank'
                    style={{ borderColor: backgroundColor, color: backgroundColor }}
                    className={`${className}${border ? "-border" : ""}-hover`}
                    ref={buttonRef}
                >
                    {children}
                </a>
            </div>
        </div>
    )
}

export default LinkButton