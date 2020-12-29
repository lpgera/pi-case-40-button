# Pi Case 40 Button

A small app to customize the Cooler Master Pi Case 40 power button.

## Installation

Create a `.env` file and specify a command to run on button press.

```
COMMAND=sudo poweroff
```

Install pm2 and app dependencies:

```
npm i -g pm2
npm i
pm2 start ecosystem.config.js
```
