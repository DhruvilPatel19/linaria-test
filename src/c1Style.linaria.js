import { css, css as overrideCss } from '@linaria/atomic'
import {c12} from './C2'

export const c1s = overrideCss`
  border-top: 2px solid brown;
`
const c1nested = `
  color: brown;
  ${c12}
`
export const c1 = css`
  background: red;
  font-size: 12px;
  font-weight: 500;
  ${c1nested}
`
