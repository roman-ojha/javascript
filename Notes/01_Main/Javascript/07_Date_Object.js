/*
    *) Date Object:
        -> The Date object is used to work with dates and times. 
        -> Date objects are created with the Date( ) constructor.
        -> We can easily manipulate the date by using the methods available for the Date object.
        -> JavaScript uses the browser's time zone and display a date as a full text string
        -> Date objects are created with the new Date() constructor.
        -> There are 4 ways to create a new date object:
            i. new Date()
            ii. new Date(year, month, day, hours, minutes, seconds, milliseconds)
            iii. new Date(milliseconds) Note: Zero time is January 01, 1970 00:00:00 UTC.
            iv. new Date(date string)

    *) Methods:
        -> toString():
            -> It returns the date in the form of string.
        -> getDate():
            -> It returns the integer value between 1 and 31 that represents the day for the specified date on the basis of local time.
        -> getDay():
            -> It returns the integer value between 0 and 6 that represents the day of the week on the basis of local time.
        -> getFullYears():
            -> It returns the integer value that represents the year on the basis of local time.
        -> getHours():
            -> It returns the integer value between 0 and 23 that represents the hours on the basis oflocal time.
        -> getMilliseconds():
            -> It returns the integer value between 0 and 999 that represents the milliseconds on the basis of local time.
        -> getMinutes():
            -> It returns the integer value between 0 and 59 that represents the minutes on the basis of local time
        -> getMonth():
            -> It returns the integer value between 0 and 11 that represents the month on the basis of local time.
        -> getSeconds():
            -> It returns the integer value between 0 and 60 that represents the seconds on the basis of local time.
        -> setDate():
            -> It sets the day value for the specified date on the basis of local time.
        -> setDay():
            -> It sets the particular day of the week on the basis of local time.
        -> setFullYears():
            -> It sets the year value for the specified date on the basis of local time.
        -> setHours():
            -> It sets the hour value for the specified date on the basis of local time.
        -> setMilliseconds():
            -> It sets the millisecond value for the specified date on the basis of local time.
        -> setMinutes():
            -> It sets the minute value for the specified date on the basis of local time.
        -> setMonth():
            -> It sets the month value for the specified date on the basis of local time.
        -> setSeconds():
            -> It sets the second value for the specified date on the basis of local time.
*/

let date = new Date();
