const UPPER_A_CODE = 65;
const UPPER_M_CODE = 77;
const UPPER_N_CODE = 78;
const UPPER_Z_CODE = 90;
const LOWER_A_CODE = 97;
const LOWER_M_CODE = 109;
const LOWER_N_CODE = 110;
const LOWER_Z_CODE = 122;
const ROT_DISTANCE = 13;

module.exports.transform = function(inString) {
    let charCode = inString.charCodeAt(0);

    if (isBetween(charCode, LOWER_A_CODE, LOWER_M_CODE) ||  isBetween(charCode, UPPER_A_CODE, UPPER_M_CODE))
        charCode += ROT_DISTANCE;
    else if (isBetween(charCode, LOWER_N_CODE, LOWER_Z_CODE) || isBetween(charCode, UPPER_N_CODE, UPPER_Z_CODE))
        charCode -= ROT_DISTANCE;

    return String.fromCharCode(charCode);
}

function isBetween(charCode, lowerBound, upperBound) {
    return charCode >= lowerBound && charCode <= upperBound;
}
