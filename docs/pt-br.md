# use-timer

> React Hook para criação de contadores decrescentes

[![NPM](https://img.shields.io/npm/v/@fdaciuk/use-timer.svg)](https://www.npmjs.com/package/@fdaciuk/use-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

:us: [English][en-docs]&nbsp;&nbsp;|&nbsp;&nbsp;:brazil: [Português do Brasil][pt-br-docs]

## Instalação

```bash
npm install --save @fdaciuk/use-timer
```

Caso use yarn:

```bash
yarn add @fdaciuk/use-timer
```

## Exemplo

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

## Exemplo completo

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

## Propriedades e métodos

- **`minutes`** (`String`): mostra os minutos restantes com precisão de 2 ou mais dígitos
- **`seconds`** (`String`): mostra os segundos restantes com precisão de 2 ou mais dígitos
- **`start`** (`Function`): função para iniciar o contador
- **`pause`** (`Function`): função para pausar o contador
- **`finished`** (`Function`): função que registra uma função para ser executada ao fim da contagem
- **`reset`** (`Function`): função para colocar o contador em seu estado inicial, passado ao hook `useTimer`
- **`setTimer`** (`Function`): função para registrar um novo valor para o contador

## Licensa

MIT © [fdaciuk](https://github.com/fdaciuk)
