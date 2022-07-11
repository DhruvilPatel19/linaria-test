import { css, cx } from '@linaria/atomic'
import React from 'react'
import C2 from './C2'
const c3 = css`
  font-size: 14px;
  color: red;
  .hello {
    color: blue;
  }
`

export default ({ style }) => <C2 style={cx(c3, style)}>hello</C2>
