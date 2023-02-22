/*
    *) Number Object
        -> The JavaScript number object enables us to represent a numeric value.
        -> It may be integer or floating-point.
        -> By the help of Number() constructor, we can create number object in JavaScript.
        -> The syntax for creating a number object is:  var val = new number(value);
        ->If value can't be converted to number, it returns NaN(Not a Number) that can be checked by isNaN() method.

    *) Number Property
        *> MAX_VALUE:
            ->The largest possible value a number in JavaScript can have
        1.7976931348623157E+308
        *> MIN_VALUE:
            -> The smallest possible value a number in JavaScript can have 5E-324
        *> NaN:
            -> Equal to a value that is not a number.
        *> NEGATIVE_INFINITY:
            -> A value that is less than MIN_VALUE.
        *> POSITIVE_INFINITY:
            -> A value that is greater than MAX_VALUE
    

    *) Methods:
        -> isFinite():
            -> It determines whether the given value is a finite number.
        -> parseFloat():
            -> It converts the given string into a floating point number.
        -> parseInt():
            -> It converts the given string into an integer number.
        -> toExponential():
            -> It returns the string that represents exponential notation of the given number.
        -> toFixed():
            -> It returns the string that represents a number with exact digits after a decimal point.
        -> toPrecision():
            -> It returns the string representing a number of specified precision.
        -> isNaN():
            -> It checks whether a value is an illegal number (Not-a-umber). This function returns true if the value equates to NaN. Otherwise it returns false. 
        -> toString():
            -> It returns the given number in the form of string.
*/

var num = new Number(10);
