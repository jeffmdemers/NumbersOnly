# NumbersOnly
A jQuery script to force a text input to allow only numbers.

####-Require numbers only (phoneTextField = text input)
NumbersOnly(phoneTextField);

####-Require numbers only with error (phoneTextField = text input, phoneErrorLabel = div or span that will display the error)
NumbersOnly(phoneTextField, phoneErrorLabel);

####-Options and their defaults
numbersOnlyError: "Only Numbers Allowed"

allowedKeyCodes: [8, 0], //8:backspace, 0: (l/r arrow, delete)

maxDigits: 6

maxDigitsError: "Must Be Less Than {0} Digits"

zeroAllowed: false //zero allowed as first digit

zeroError: "Zero Amount Not Valid"



####-To pass overriding options into NumbersOnly, pass them in as the third parameter if of the call.
The following code allows a zero as the first digit typed, and has a maximum number of allowed digits equal to 10.
NumbersOnly(phoneTextField, phoneErrorLabel, { zeroAllowed: true, maxDigits: 10 });


