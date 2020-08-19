import { useCallback, useEffect, useRef, useState } from 'react'

function useTimer (stringTime) {
  const timer = useRef()

  const twoChars = useCallback((number) => {
    return '' + (+number < 10 ? `0${number}` : number)
  }, [])

  const [minutes, seconds] = stringTime.split(':')
  const getInitialTime = useCallback(() => {
    return {
      minutes: twoChars(+minutes || 0),
      seconds: twoChars(+seconds || 0),
    }
  }, [minutes, seconds, twoChars])

  const [time, setTime] = useState(getInitialTime())

  const hasFinished = +time.minutes === 0 && +time.seconds === 0

  const start = useCallback(() => {
    clearInterval(timer.current)

    timer.current = setInterval(() => {
      setTime(time => ({
        minutes: twoChars(+time.seconds === 0 ? time.minutes - 1 : +time.minutes),
        seconds: twoChars(+time.seconds === 0 ? 59 : time.seconds - 1),
      }))
    }, 1000)
  }, [twoChars])

  const pause = useCallback(() => {
    clearInterval(timer.current)
  }, [])

  const finished = useCallback((func) => {
    if (hasFinished) {
      return func && func()
    }
  }, [hasFinished])

  const reset = useCallback(() => {
    setTime(getInitialTime())
  }, [getInitialTime])

  const setTimer = useCallback((stringTime) => {
    const [minutes, seconds] = stringTime.split(':')

    setTime({
      minutes: twoChars(+minutes || 0),
      seconds: twoChars(+seconds || 0),
    })
  }, [twoChars])

  useEffect(() => {
    if (hasFinished) {
      clearInterval(timer.current)
    }

    return () => clearInterval(timer.current)
  }, [hasFinished])

  return {
    ...time,
    start,
    pause,
    finished,
    reset,
    setTimer,
  }
}

export default useTimer
