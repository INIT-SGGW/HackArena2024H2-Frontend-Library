import './DropDown.css'
import React, { useEffect, useRef } from 'react'

//COMONENTS AND TYPES
import { useWindowWidth } from '../..';
import { computePosition, flip, shift } from '@floating-ui/react';

interface DropDownProps {
    clickEvent: React.MouseEvent | null;
    options: {
        title: string;
        onClick: Function;
    }[] | null;
}

function DropDown({ clickEvent, options }: DropDownProps) {
    const dropDownRef = useRef<HTMLDivElement>(null);
    const windowWidth = useWindowWidth();
    const [isOpen, setIsOpen] = React.useState(false);


    useEffect(() => {
        // console.log("ClickEvent", clickEvent?.target)
        if (dropDownRef.current && clickEvent) {
            setIsOpen(true)
            computePosition(clickEvent.target as HTMLElement, dropDownRef.current, {
                placement: 'bottom',
                middleware: [flip(), shift({ padding: 10 })]
            }).then(({ x, y }) => {
                if (dropDownRef.current) {
                    dropDownRef.current.style.left = `${x}px`;
                    dropDownRef.current.style.top = `${y}px`;
                }
            })
        } else {
            setIsOpen(false)
        }
    }, [clickEvent, windowWidth])

    useEffect(() => {
        if (clickEvent) {
            setIsOpen(true)
        }
    }, [clickEvent])

    const handleClick = (option: { title: string, onClick: Function }) => {
        setIsOpen(false);
        option.onClick();
    }

    return (
        <>

            <div className={`dropdown${isOpen ? "" : " hidden"}`} ref={dropDownRef}>
                {
                    options !== null &&
                    options.map((option, index) => (
                        <div key={index} className='dropdown__option' onClick={() => handleClick(option)}>
                            {option.title}
                        </div>
                    ))}
            </div>
        </>
    )
}

export default DropDown