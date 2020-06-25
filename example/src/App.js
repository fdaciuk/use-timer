import React, { useCallback, useEffect } from 'react'
import useTimer from '@fdaciuk/use-timer'

function App () {
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
      console.log('acabou!')
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

export default App
