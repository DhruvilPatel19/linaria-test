import { css, cx, styled } from '@linaria/atomic'
import React, { useState } from 'react'
import { returnStyle } from './constants'

const xyzStyle = css`
  && {
    font-weight: 500;
    color: var(--counto);
  }
`
const colorArr2 = ['brown', 'black', 'blue', 'orange']
const colorArr = ['red', 'pink', 'brown', 'blue', 'black']

const TempChile = styled.div`
  font-size: 30px;
  color: ${props => colorArr[props.count]};
  -webkit-line-clamp: ${({ count }) => count};
  ${returnStyle('font-size: 50px')};
  ${multiLineEllipsis};
`

export const placeHolderShimmer = `@keyframes placeHolderShimmer {
  0% {
      background-position: -400px 0
  }
  100% {
      background-position: 400px 0
  }
}
`
const placeHerShimmer = `@keyframes placeHolderShimmer {
  0% {
      background-position: -100px -100px
  }
  100% {
      background-position: 100px 100px
  }
}
`
export const Shimmer = styled.div`
  width: 100px;
  height: 100px;
  background: #f6f7f8
    linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    )
    800px 104px no-repeat;
  animation: placeHolderShimmer 1.25s linear infinite;
  ${placeHolderShimmer}
`
export const CustomColorShimmer = styled(Shimmer)`
  margin-top: 20px;
  width: 200px;
  height: 200px;
  background: ${props => props.bgColor}
    linear-gradient(
      to right,
      ${props => props.bgColor} 0%,
      ${props => props.fgColor} 20%,
      ${props => props.bgColor} 40%,
      ${props => props.bgColor} 100%
    )
    800px 104px no-repeat;
  animation: placeHolderShimmer 1.25s linear infinite;
  ${placeHerShimmer}
`
const multiLineEllipsis = `
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`

const s1 = css`
  font-size: 25px;
`
const s2 = css`
  font-size: 30px;
`
const Child1 = ({ className, style, newStyle }) => {
  const [counter, setCounter] = useState(0)
  return (
    <div
      className={cx(className, newStyle ? s1 : s2)}
      onClick={() => setCounter(a => a + 1)}
    >
      <TempChile
        className={cx('xyz', style)}
        count={counter}
        style={{ '--counto': colorArr2[counter] }}
      >
        Inside Child 1
      </TempChile>
      <Shimmer />
      <CustomColorShimmer bgColor='#f6f744' fgColor='#edeef1' />
    </div>
  )
}

const Child2 = () => <Child1 className={xyzStyle} newStyle style={xyzStyle} />

export default Child2
