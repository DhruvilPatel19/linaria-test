import { css, css as overrideCss } from '@linaria/core'

export const c1s = overrideCss`
  border-top: 2px solid brown;
`

export const c1 = css`
  background: red;
  font-size: 12px;
  font-weight: 500;
  color: blue;
  list-style-type: none;
  border: 1px solid black;
`
