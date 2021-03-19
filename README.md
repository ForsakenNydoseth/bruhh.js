# Contribute


</> bruhh.js - 0.0.fuckyou
======================

[![Build Status](https://travis-ci.org/ForsakenNydoseth/bruhh.js.svg?branch=main)](https://travis-ci.org/ForsakenNydoseth/bruhh.js)

Dat: [https://ForsakenNydoseth.github.io/bruhh.js/](https://ForsakenNydoseth.github.io/bruhh.js/)


install
===============

Install with npm:

```sh
npm install bruhh.js
```

API doc
=================

bruhh object
------------

```js
const bruhh = new bruhh()

/* The starting scale is the minimum scale your element will take (Scale ratio is startingScale + (pulseRatio * currentPulse)).
 * Value in percentage between 0 and 1
 * Default: 0.75
 * Aaaaaaaaaaaaaaaaaaaaaaaaaaah why did i do this shittttttttttttt
 */
bruhh.startingScale = value

bruhh.setMusic(audioUrl) //url :link

bruhh.connectExternalAudioElement(audioElement)

bruhh.setGain(value) //gain some bruhhness

/* Add your own bruhh-class
 * @elementClass: Class that you want to link your bruhh to
 * @danceType: Use any of the built-in effect or give your own function
 * @startValue: The starting frequency of your bruhh
 * @nbValue: The number of frequency of your bruhh
 * 1024 Freq, your bruhh roksa will react to the average of your selected freq.
 * Examples: bass 0-10 ; medium 150-40 ; high 500-100
 */
bruhh.addbruhh(elementClass, danceType, startValue, nbValue) //adds some bruhh into the mix

```
This object must have two properties:
 - dance: The custom function to make elements dance
 - reset: The associated custom function that will be called to reset element style

License: eat my ass and u get it for free

Author: [@ForsakenNydoseth]
