// Regex strings for html
const PasswordRegexString = String.raw`^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.,=?\/\\<>+_\{\}\[\]\|\(\)\;\:'"\-]).{8,}$`;
const TextRegexString = String.raw`^[A-Za-zÀ-ÖØ-öø-ÿąćółżźńęĄĆÓŁŻŹŃĘ' \-]+$`;
const TextAndNumbersRegexString = String.raw`^[A-Za-zÀ-ÖØ-öø-ÿąćółżźńęĄĆÓŁŻŹŃĘ0-9' \-]+$`;
const EnglishAlphabetRegexString = String.raw`^[A-Za-z]+$`;
const EmailRegexString = String.raw`^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$`;

// Regexes
const TextRegex = new RegExp(TextRegexString);

export { PasswordRegexString, TextRegexString, EmailRegexString, TextRegex, EnglishAlphabetRegexString, TextAndNumbersRegexString };