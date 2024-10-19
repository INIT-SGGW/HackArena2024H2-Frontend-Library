import './DropDown.css'
import React, { useEffect, useRef } from 'react'

//COMONENTS AND TYPES
import { useWindowWidth } from '../..';
import { computePosition, flip, shift } from '@floating-ui/react';

interface DropDownProps {
    clickEvent: React.MouseEvent;
    options: {
        title: string;
        onClick: Function;
    }[] | null;
}

function DropDown({ clickEvent, options }: DropDownProps) {
    const dropDownRef = useRef<HTMLDivElement>(null);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        if (dropDownRef.current) {
            computePosition(clickEvent.target as HTMLElement, dropDownRef.current, {
                placement: 'bottom',
                middleware: [flip(), shift({ padding: 10 })]
            }).then(({ x, y }) => {
                if (dropDownRef.current) {
                    dropDownRef.current.style.left = `${x}px`;
                    dropDownRef.current.style.top = `${y}px`;
                }
            })
        }
    }, [clickEvent, windowWidth])

    return (
        <div className='dropdown' ref={dropDownRef}>
            {
                options !== null &&
                options.map((option, index) => (
                    <div key={index} className='dropdown__option' onClick={() => option.onClick()}>
                        {option.title}
                    </div>
                ))}
        </div>
    )
}

export default DropDown