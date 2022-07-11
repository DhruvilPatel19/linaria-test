import { css } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { titlecolor } from './constants'
import Child1 from './ChileCompo.linaria.js'
import C3 from './C3'

const emotionStyle = css`
  font-size: 30px;
`

const titleClass = css`
  font-family: sans-serif;
  font-size: 48px;
  color: ${titlecolor};
`
const titleColor = css`
  color: #f15f79;
`
// const commonMediaQueries = {
//   xs: '@media (min-width:200px)',
//   md: '@media (min-width:400px)'
// }

// const mqStyle = {
//   [commonMediaQueries.xs]: {
//     backgroundColor: 'green'
//   },
//   [commonMediaQueries.md]: {
//     backgroundColor: 'aqua'
//   }
// }

const responsiveLayoutCss = css`
  display: flex;
  flex-direction: column;
`
const propStyle = css`
  color: pink;
`

const App = () => (
  <div css={responsiveLayoutCss}>
    <C3 />
    <h1 css={[titleColor, titleClass, emotionStyle]}>Hello world!</h1>
    <Child1 css={propStyle} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
