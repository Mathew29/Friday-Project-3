# Beep Boop

#### Number to roman numeral converter, 3/22/2019

#### By **Mathew Akre**

## Description

_It will create a web application that takes a inputed number from a user a returns that value in a range from 0 to that value. Every number that has a 1 will say "Beep!" Every number with a 2 will say "Boop!" and every number with a number 3 will say "I'm sorry, Dave. I'm afraid I can't do that." Ever number with a 1 should apply unless there is a 2 or 3. Every number with a 2 should apply unless there is a 3._


## Behavior-Driven Development

|Behavior|Input|Output|
|-|-|-|
|The program returns a range of numbers from 0 to the users inputted number|4|0, 1, 2, 3, 4|
|Exception 1: Numbers that contain a 1: all digits are replaced with "Beep!"|14|"Beep!"|
|Exception 2: Numbers that contain a 2: all digits are replaced with "Boop!"|24|"Boop!"|
|Exception 3: Numbers that contain a 3: all digits are replaced with "I'm sorry Dave. I'm afraid I can't do that."|34|"I'm sorry Dave. I'm afraid I can't do that."|
|The first exception should apply unless the second or third does|21/13|"Boop!"/"I'm sorry Dave. I'm afraid I can't do that."|
|The second exception should apply unless the third does|32|"I'm sorry Dave. I'm afraid I can't do that."|
## Setup/Installation Requirements

1. Clone Github repository
2. Open the command line
3. Change directory to the Desktop
4. Use the command
5. Open index.html

## Technologies Used

1. html
2. css
3. javascript

### License

*MIT license*

Copyright (c) 2016 **_Mathew Akre**
