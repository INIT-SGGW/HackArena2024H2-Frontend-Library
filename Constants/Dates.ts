// Dates Constants
const eventStartDate: Date = new Date(process.env.REACT_APP_EVENT_START_DATE || "2024-10-26T10:00:00+02:00");
const eventEndDate: Date = new Date(process.env.REACT_APP_EVENT_END_DATE || "2024-10-27T19:00:00+02:00");
const registrationStartDate: Date = new Date(process.env.REACT_APP_REGISTRATION_START_DATE || "2024-10-01T00:00:00+02:00");
const registrationEndDate: Date = new Date(process.env.REACT_APP_REGISTRATION_END_DATE || "2024-10-19T00:00:00+02:00");
const testTaskStartDate: Date = new Date(process.env.REACT_APP_TEST_TASK_START_DATE || "2024-10-19T12:00:00+02:00");
const testTaskEndDate: Date = new Date(process.env.REACT_APP_TEST_TASK_END_DATE || "2024-10-21T08:00:00+02:00");

const youngestParticipantAge: number = 16;

export { eventStartDate, eventEndDate, registrationStartDate, registrationEndDate, youngestParticipantAge, testTaskEndDate, testTaskStartDate };
