import './EventListBanner.css'

import { useNavigate } from 'react-router-dom'

const EventListBanner = ({ image, title, url, isPresent = false }: { image: string, title: string, url: string, isPresent?: boolean }): JSX.Element => {
    const navigate = useNavigate()

    return (
        <div className={`event-list-banner ${isPresent ? "event-list-banner--present" : "event-list-banner--finished"}`}>
            <div onClick={() => navigate(url)}>
                <img src={image} alt={`${title} banner`} />
                <h4 className={`${isPresent ? "header__yellow" : "header__white"}`}>{title}</h4>
            </div>
        </div>
    )
}

export default EventListBanner