# Contribute


<♫/> bruhh.js - v2.2.5
======================

[![Build Status](https://travis-ci.org/Okazari/bruhh.js.svg?branch=master)](https://travis-ci.org/Okazari/bruhh.js)

Demo at: [https://okazari.github.io/bruhh.js/](https://okazari.github.io/bruhh.js/)

A JavaScript library that makes your page dance.


Getting started
===============

Install with npm:

```sh
npm install bruhh.js
```

Or get from a CDN:

```
https://unpkg.com/bruhh.js/
https://cdnjs.cloudflare.com/ajax/libs/bruhh.js/2.2.5/bruhh.min.js
```

Good old way
------------

Import bruhh into your page:

```html
<script type="text/javascript" src="/path/to/bruhh.min.js"></script>
```

Add one of the bruhh css classes to indicate which element will dance:

```html
<div class="bruhh-bass"></div>
```

Create a bruhh object and give it your audio URL then use the start function:

```js
var bruhh = new bruhh()
bruhh.setMusic('path/to/sample.mp3')
bruhh.start()
```

ES6 module
----------

```js
import bruhh from 'bruhh.js'
const bruhh = new bruhh()
bruhh.setMusic('path/to/sample.mp3')
bruhh.start()
```


API documentation
=================

bruhh object
------------

```js
const bruhh = new bruhh()

/* The starting scale is the minimum scale your element will take (Scale ratio is startingScale + (pulseRatio * currentPulse)).
 * Value in percentage between 0 and 1
 * Default: 0.75
 */
bruhh.startingScale = value

/* The pulse ratio is be the maximum additional scale your element will take (Scale ratio is startingScale + (pulseRatio * currentPulse)).
 * Value in percentage between 0 and 1
 * Default: 0.30
 */
bruhh.pulseRatio = value

/* The max value history represent the number of passed value that will be stored to evaluate the current pulse.
 * Int value, minimum 1
 * Default: 100
 */
bruhh.maxValueHistory = value

/* Set the music the page will dance to
 * @audioUrl: '../example/mysong.mp3'
 */
bruhh.setMusic(audioUrl)

/* Used to collaborate with other players library.
 * You can connect bruhh to an audioElement, and then control the audio with your other player
 */
bruhh.connectExternalAudioElement(audioElement)

/* Adjust audio gain
 * @value: Number
 */
bruhh.setGain(value)

/* Add your own bruhh-class
 * @elementClass: Class that you want to link your bruhh to
 * @danceType: Use any of the built-in effect or give your own function
 * @startValue: The starting frequency of your bruhh
 * @nbValue: The number of frequency of your bruhh
 * 1024 Frequencies, your bruhh will react to the average of your selected frequencies.
 * Examples: bass 0-10 ; medium 150-40 ; high 500-100
 */
bruhh.addbruhh(elementClass, danceType, startValue, nbValue)

/* Plug your computer microphone to bruhh.js.
 * This function returns a Promise object that is resolved when the microphone is up.
 * Require your website to be run in HTTPS
 */
bruhh.plugMicrophone().then(function(){...})

// Let's dance
bruhh.start()

/* Stop the party
 * @freeze: Set this to true if you want to prevent the elements to reset to their initial position
 */
bruhh.stop(freeze)
```

Built-in classes with "pulse" effect
------------------------------------

+ bruhh-bass
+ bruhh-medium
+ bruhh-high

Custom-classes
--------------

You can use the `addbruhh` function to make your own classes listen to specific frequencies.
Here is how the basics classes are created:
+ `addbruhh('bruhh-bass', 'pulse', 0, 10)`
+ `addbruhh('bruhh-medium', 'pulse', 150, 40)`
+ `addbruhh('bruhh-high', 'pulse', 500, 100)`

Dance types available
---------------------

For more control of theses dance types, you can give a configuration object as last argument to `addbruhh`:

```js
addbruhh('bruhh-high', 'shake', 500, 100, { direction:'left', min: 20, max: 300 })
```

Here are the built-in dances and their options:
+ pulse
  + min: Minimum value given to `transform: scale()`. Default: `0.75`
  + max: Maximum value given to `transform: scale()`. Default: `1.25`
+ jump
  + min: Minimum value given to `transform: translateY()`. Default: `0`
  + max: Maximum value given to `transform: translateY()`. Default: `30`
+ shake
  + min: Minimum value given to `transform: translateX()`. Default: `-15`
  + max: Maximum value given to `transform: translateX()`. Default: `15`
  + direction: `left` for a right to left move, `right` for a left to right move. Default: `right`
+ twist
  + min: Minimum value given to `transform: rotate()`. Default: `-20`
  + max: Maximum value given to `transform: rotate()`. Default: `20`
  + direction: `left` for a right to left move, `right` for a left to right move. Default: `right`
+ vanish
  + min: Minimum value (between 0 and 1) given to `opacity`. Default: `0`
  + max: Maximum value (between 0 and 1) given to `opacity`. Default: `1`
  + reverse: Boolean to reverse the effect. Default: `false` (Higher the pulse is, the more visible it will be)
+ borderColor
  + from: Array of integer between 0 and 255 corresponding to a RGB color. Default: `[0,0,0]`
  + to: Array of integer between 0 and 255 corresponding to a RGB color. Default: `[255,255,255]`
+ color
  + from: Array of integer between 0 and 255 corresponding to a RGB color. Default: `[0,0,0]`
  + to: Array of integer between 0 and 255 corresponding to a RGB color. Default: `[255,255,255]`
+ radius
  + min: Minimum value given to `border-radius`. Default: `0`
  + max: Maximum value given to `border-radius`. Default: `25`
  + reverse: Boolean to make effect from max to min. Default: `false`
+ blur
  + min: Minimum value given to `filter: blur()`. Default: `0`
  + max: Maximum value given to `filter: blur()`. Default: `8`
  + reverse: Boolean to make effect from max to min. Default: `false`
+ swing
  + curve: Whether the element should curve `up` or `down`. Default: `down`
  + direction: Whether the element should swing `right` or `left`. Default: `right`
  + radius: How far the element will swing. Default: `20`
+ kern
  + min: Minimum value given to `letter-spacing`. Default: `0`
  + max: Maximum value given to `letter-spacing`. Default: `25`
  + reverse: Boolean to make effect from max to min. Default: `false`
+ neon
  + from: Array of integer between 0 and 255 corresponding to a RGB color. Default: `[0,0,0]`
  + to: Array of integer between 0 and 255 corresponding to a RGB color. Default: `[255,255,255]`
+ borderWidth
  + min: Minimum value given to `border-width`. Default: `0`
  + max: Maximum value given to `border-width`. Default: `5`
+ fontSize
  + min: Minimum value given to `font-width`. Default: `0.8`
  + max: Maximum value given to `font-width`. Default: `1.2`
+ tilt
  + min: Minimum value given to `tilt`. Default: `20`
  + max: Maximum value given to `tilt`. Default: `25`
  + reverse: Boolean to make effect from max to min. Default: `false`
+ fontColor
  + from: Array of integer between 0 and 255 corresponding to a RGB color. Default: `[0,0,0]`
  + to: Array of integer between 0 and 255 corresponding to a RGB color. Default: `[255,255,255]`

To see each visual effect, you can go to the [Demo](https://okazari.github.io/bruhh.js/).

Custom dance type
-----------------

If you want to use your own dance type, you need to give an object as the 2nd argument of `addbruhh` instead of a built in dance key.

This object must have two properties:
 - dance: The custom function to make elements dance
 - reset: The associated custom function that will be called to reset element style

```js
/* The custom function signature is
 * @elem: The HTML element target you want to apply your effect to
 * @value: The current pulse ratio (percentage between 0 and 1)
 * @options: The option object user can give as last argument of addbruhh function
 */
const pulse = (elem, value, options = {}) => {
  const max = options.max || 1.25
  const min = options.min || 0.75
  const scale = (max - min) * value
  elem.style.transform = `scale(${min + scale})`
}

/* The reset function signature is
 * @elem: The element to reset
 */
const resetPulse = elem => {
  elem.style.transform = ''
}

addbruhh('my-css-class', { dance: pulse, reset: resetPulse }, 150, 40)
```


Features
========

 + Your HTML can dance by using any of the available dance types.
 + You can use custom functions to build you own dance type (and if it looks awesome! Feel free to make a PR ;) )


Contribute
==========

Any pull request will be appreciated. You can start coding on this project following these steps:
 + Fork the project
 + Clone your repository
 + Run ```npm install```
 + Run ```npm start``` in the main folder to launch a development web server
 + Enjoy the bruhh

Adding new dance type
---------------------

In v2.2.x adding a new dance type is pretty easy:
+ Create a new file in `src\dances`
+ This file must export your custom dance type function
+ This file must export a reset function

For example, here is the content of `jump.js` file:

```js
/* The function signature is
 * @elem: The HTML element target you want to apply your effect to
 * @value: The current pulse ratio (percentage between 0 and 1)
 * @options: The option object user can give as last argument of addbruhh function
 */
export default (elem, value, options = {}) => {
  const max = options.max || 30
  const min = options.min || 0
  const jump = (max - min) * value
  elem.style.transform = `translateY(${-jump}px)`
}

/* The reset function signature is
 * @elem: The element to reset
 */
export const reset = elem => {
  elem.style.transform = ''
}
```

+ Import it and register it into the constructor of `Dancer.js` file:

```js
import jump, { reset as resetJump } from './dances/jump.js'
class Dancer {
  constructor() {
    this.registerDance('jump', jump, resetJump)
  }
}
```

+ Commit it and create a PR. Then look at everyone enjoying your contribution :) !

License: GNU GPL

Author: [@OkazariBzh](https://twitter.com/OkazariBzh)
