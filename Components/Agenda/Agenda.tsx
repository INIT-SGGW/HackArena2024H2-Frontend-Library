import './Agenda.css'

import React, { useEffect } from 'react'

//ASSETS
import text from "../../Assets/text.json"
import { AgendaData, ComponentText } from './types'
import { agendaDataHackArena2 } from './AgendaData'

function Agenda() {
    const componentText: ComponentText = text.agenda;
    const [agendaData, setAgendaData] = React.useState<AgendaData | null>(null)

    useEffect(() => {
        setAgendaData(agendaDataHackArena2);
    }, [])

    return (
        <div className='agenda pagewidth event--section'>
            <h2 className="header__white">{componentText.title}</h2>
            <h6>{componentText.description}</h6>
            <div className="agenda__content">
                {agendaData && agendaData.days.map((day, index) => (
                    <div key={index} className="agenda__day">
                        <h3>{day.title}</h3>
                        <ul>
                            <div>
                                <div className='agenda__marker'>
                                    <div className='marker__circle' />
                                    <div className='marker__line' />
                                    <div className='marker__circle' />
                                </div>
                                {day.events.slice(0, -1).map((event, index) => (
                                    <ListItem key={index} itemText={event} />
                                ))}
                            </div>
                            <ListItem itemText={day.events[day.events.length - 1]} />
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

const ListItem = ({ itemText: { time, text } }: { itemText: { time: string, text: string | string[] } }) => (
    <li>
        <span>{time}</span>
        {
            Array.isArray(text) ?
                <div className='listitem__group'>
                    {
                        text.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))
                    }
                </div>
                :
                <span>{text}</span>
        }
    </li>
)


export default Agenda