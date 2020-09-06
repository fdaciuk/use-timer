interface IFinishedCallback {
  (): void
}

interface IUseTimerResponse {
  minutes: string
  seconds: string
  start: () => void
  pause: () => void
  finished: (func: IFinishedCallback) => void
  reset: () => void
  setTimer: (newTimer: string) => void
}

declare function useTimer(stringTime: string): IUseTimerResponse

export default useTimer
declare module '@fdaciuk/use-timer'
