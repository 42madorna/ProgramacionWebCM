# Calculatron

## _A project for the course 20/8661 IFCT092PO PROGRAMACIÓN WEB CON SOFTWARE LIBRE of Community of Madrid_

Try out the live version of this project at [Calculatron](https://calculatron.adornapps.com)

## This project has some challenges to achieve:

-   Build a time converter.  
     This has to be done passing a value in seconds to PHP
    and then, return them as seconds, minutes, hours and days.
-   Calculate area and length of a circle  
     It is done by passing the circle radius to PHP and
    this returns the area and length values.
-   Calculate area and length of a triangle  
     This is the most complex challenge of this project.
    You have to pass to PHP the three sides of the triangle,
    calculate and return the area and length values.  
    Why do I say it was the most complex challenge?
    You have to keep in mind that not every triangle exists, so
    of course, validation has to be done to prevent any malfunction.

## Implementation

I have implemented this with a full stack based on PHP + Vanilla JS.  
It works in a way that you have three forms and three API endpoints,
which are called using a POST and sending the required values as x-www-form-urlencoded.

### Frontend

As I said before, the frontend presented here has been done with vanilla JS and it only
does some validation, sends the POST request to PHP and manages the result sent by PHP.

### Backend

The backend had to be written in PHP.  
It returns the response as JSON, with a status of 200 if it went all ok.
If some error happens, which I have just considered a client error, a status 400
is sent and the returned JSON will contain the error information inside of it.

## API endpoints

API endpoints for this project are the following:

-   POST /convert.php?type=time

    -   body:
        -   seconds: (int) value in seconds
    -   response:
        -   seconds: (int) value in seconds
        -   minutes: (int) seconds value converted into minutes
        -   hours: (int) seconds value converted into hours
        -   days: (int) seconds value converted into hours

-   POST /convert.php?type=circle

    -   body:
        -   radius: (float) radius length
    -   response:
        -   area: (float) circle area
        -   length: (float) circle length

-   POST /convert.php?type=triangle
    -   body:
        -   side1: (float) side1 length
        -   side2: (float) side2 length
        -   side3: (float) side3 length
    -   response:
        -   area: (float) triangle area
        -   length: (float) sum of the tree sides given
