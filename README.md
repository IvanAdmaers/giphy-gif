# GiphyGif

This module gets a direct link to a Giphy gif that can be embedded or downloaded

## Installation

```bash
# Via npm:
npm i giphy-gif
# Via yarn:
yarn add giphy-gif
```

## Usage

```js
import { GiphyGif } from 'giphy-gif';

const gif = GiphyGif.getDirectLink('https://giphy.com/gifs/life-gets-down-olAik8MhYOB9K');

console.info(gif);

/* Checks */

const isDirectImage1 = GiphyGif.isDirectImage('https://giphy.com/gifs/life-gets-down-olAik8MhYOB9K');

console.info(isDirectImage1); // false

const isDirectImage2 = GiphyGif.isDirectImage(gif);

console.info(isDirectImage2); // true

```

## Supported urls

* Gif page (like https://giphy.com/gifs/life-gets-down-olAik8MhYOB9K)
* Gif embedding page (like https://giphy.com/embed/olAik8MhYOB9K)
* Gif media page (like https://media4.giphy.com/media/olAik8MhYOB9K/giphy.gif)
