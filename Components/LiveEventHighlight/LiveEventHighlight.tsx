import "./LiveEventHighlight.css";
import { useNavigate } from "react-router-dom";

//COMPONENTS
import { Button } from "..";
import {
    getEventStatus,
    EventStatus,
    replacePlaceholders,
    dateFormat,
    DateFormat,
} from "../../Utils";
import { eventStartDate, registrationEndDate } from "../../Constants";
import { useTimeToEvent } from "../../Hooks";
import { ComponentText } from "./types";

//ASSETS
import text from "../../Assets/Text/main.json";

function LiveEventHighlight() {
    const componentText: ComponentText = text.liveEventHighlight;
    const timeToEvent = useTimeToEvent();
    const navigate = useNavigate();

    return (
        <div className="LiveEventHighlight">
            {getEventStatus() === EventStatus.EventLive && (
                <div className="home--date home--section">
                    <h3>{componentText.title.eventLive}</h3>
                </div>
            )}
            {getEventStatus() === EventStatus.EventDone && (
                <div className="home--date home--section">
                    <h3>{componentText.title.eventDone}</h3>
                </div>
            )}
            {(getEventStatus() === EventStatus.CloseToRegistration ||
                getEventStatus() === EventStatus.RegistrationOpen ||
                getEventStatus() === EventStatus.RegistrationClosed) && (
                    <div className="home--date home--section">
                        {/* TODO: style home date */}
                        <h3>
                            {replacePlaceholders(componentText.title.closeToRegistration, [
                                dateFormat(eventStartDate, DateFormat.DATE),
                                dateFormat(eventStartDate, DateFormat.TIME),
                            ])}
                        </h3>
                        <h2 className="header__yellow">{timeToEvent}</h2>
                        {getEventStatus() === EventStatus.RegistrationOpen && (
                            <div>
                                <p>
                                    {replacePlaceholders(
                                        componentText.description,
                                        dateFormat(registrationEndDate, DateFormat.DATE)
                                    )}
                                </p>
                                <Button
                                    onClick={() => navigate("/rejestracja")}
                                    className="btn btn__primary btn__primary-border"
                                >
                                    {componentText.button}
                                </Button>
                            </div>
                        )}
                    </div>
                )}
        </div>
    );
}

export default LiveEventHighlight;
