import './Sponsors.css'

//COMPONENTS
import { ComponentText, Event, Sponsor } from './types'

//ASSETS
import SponsorsData from './sponsorsData'
import text from '../../Assets/text.json'

function SponsorSection({ title, sponsors, isPastEvent }: { title: string, sponsors: Sponsor[] | undefined, isPastEvent?: boolean }) {
    if (!sponsors) return null

    return (
        <div className="sponsors__section">
            {!isPastEvent && <h2 className="header__white">{title}</h2>}
            <div>
                {
                    sponsors.map((sponsor, index) => {
                        return <a key={index} href={sponsor.url} target="_blank" rel="noreferrer">
                            <img src={sponsor.logo} title={sponsor.name} alt={sponsor.name} style={sponsor.height ? { height: `${sponsor.height}px` } : {}} />
                        </a>
                    })
                }
            </div>
        </div>
    )
}

function Sponsors({ event, isPastEvent = true }: { event: Event, isPastEvent?: boolean }) {
    const componentText: ComponentText = text.sponsors;

    return (
        <div className={`sponsors${isPastEvent ? " event--section" : ""}`}>
            {
                isPastEvent &&
                <div className='sponsors__text'>
                    <h2 className='header__white'>{componentText.title}</h2>
                    <p className='text__white'>{componentText.description}</p>
                </div>
            }
            <SponsorSection title={componentText.titles.sponsors} sponsors={SponsorsData[event].sponsors} isPastEvent />
            <SponsorSection title={componentText.titles.partners} sponsors={SponsorsData[event].partners} />
            <SponsorSection title={componentText.titles.patronage} sponsors={SponsorsData[event].patronage} />
            <SponsorSection title={componentText.titles.mediaPatronage} sponsors={SponsorsData[event].mediaPatronage} />
        </div>
    )
}


export default Sponsors