# use-timer

> React Hook to easily create decremental timers

[![NPM](https://img.shields.io/npm/v/@fdaciuk/use-timer.svg)](https://www.npmjs.com/package/@fdaciuk/use-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @fdaciuk/use-timer
```

If you are using yarn:

```bash
yarn add @fdaciuk/use-timer

```

## Usage

```jsx
import React, { useEffect } from 'react'
import useTimer from '@fdaciuk/use-timer'

function Example () {
  const { minutes, seconds, start } = useTimer('05:00')

  useEffect(() => {
    start()
  }, [start])

  return (
    <div>{minutes}:{seconds}</div>
  )
}
```

## Complete example

```jsx
import React, { useCallback, useEffect } from 'react'
import useTimer from '@fdaciuk/use-timer'

function Example () {
  const {
    minutes,
    seconds,
    start,
    pause,
    finished,
    reset,
    setTimer
  } = useTimer('05:00')

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setTimer(e.target.elements.time.value)
  }, [setTimer])

  useEffect(() => {
    finished(() => {
      console.log('finished!')
    })
  }, [finished])

  return (
    <>
      <h1>{minutes}:{seconds}</h1>
      <button onClick={start}>Start!</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset timer</button>

      <form onSubmit={handleSubmit}>
        <input type='text' name='time' />
        <button type='submit'>Set new timer</button>
      </form>

    </>
  )
}
```

## Properties and methods

- **`minutes`** (`String`): show left minutes in 2 or more digits
- **`seconds`** (`String`): show left seconds in 2 or more digits
- **`start`** (`Function`): function that should be executed when the timer is supposed to start counting
- **`pause`** (`Function`): function to pause timer,
- **`finished`** (`Function`): function that receives another functions that will be executed when timer finish counting
- **`reset`**: (`Function`): function to reset counter to it's initial time, passed to `useTimer` hook
- **`setTimer`**: (`Function`): function to set a new timer

## License

MIT © [fdaciuk](https://github.com/fdaciuk)
