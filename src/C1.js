import { cx } from '@linaria/core'
import React from 'react'
import { c1, c1s } from './c1Style.linaria'

export default () => (
  <div className={cx(c1, c1s)}>
    hello
    <div className='hello'>blue</div>
  </div>
)

// atm_c8_dlk8xv - 14px
// atm_c8_w1gvyb - 13px
// atm_c8_1fwxnve - 12px
