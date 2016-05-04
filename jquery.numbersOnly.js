/*
 * jQuery NumbersOnly - v1.0 - 5/4/2016
 * https://github.com/jeffmdemers/NumbersOnly/
 * 
 * Copyright (c) 2016 Jeff Demers
 * Licensed under the MIT license.
 * https://opensource.org/licenses/MIT
 */
function NumbersOnly (textInput, errorContainer, settings) {
        var options = jQuery.extend({
            numbersOnlyError: "Only Numbers Allowed",
            allowedKeyCodes: [8, 0], //8:backspace, 0: (l/r arrow, delete)
            maxDigits: 6,
            maxDigitsError: "Must Be Less Than {0} Digits",
            zeroAllowed: false, //zero allowed as first digit
            zeroError: "Zero Amount Not Valid"
        }, settings);

        options.maxDigitsError = options.maxDigitsError.replace("{0}", options.maxDigits + 1)

        jQuery(textInput).keypress(function (event) {
            var input = jQuery(this);

            if (jQuery.inArray(event.which, options.allowedKeyCodes) > -1) {
                return;
            }

            var fail = false;
            var errorMessage;

            //max digits check (allow characters to be entered if all text is selected)
            if (!fail && !context.isTextSelected(input) && options.maxDigits > 0 && input.val().length >= options.maxDigits) {
                errorMessage = options.maxDigitsError;
                fail = true;
            }

            //only numbers allowed in this box (and no spaces)
            if (!fail && (event.which == 32 || isNaN(String.fromCharCode(event.which)))) {
                errorMessage = options.numbersOnlyError;
                fail = true;
            }

            //if zeros not allowed as first digit
            if (!fail && !options.zeroAllowed && input.val().length == 0 && (event.which == 48 || event.which == 96)) {
                errorMessage = options.zeroError;
                fail = true;
            }

            if (fail) {
                event.preventDefault(); //stop character from entering input
                if (errorContainer) {
                    errorContainer.html(errorMessage);
                }
            }
            HandleResult(fail);
        });

        function HandleResult(fail) {
            if (!errorContainer) {
                return;
            }
            if (fail) {
                errorContainer.fadeIn();
            } else {
                errorContainer.hide();
            }
        }

        //This removes the error message when the user clicks away from the box.
        jQuery(textInput).blur(function () {
            HandleResult(false);
        });
    };
