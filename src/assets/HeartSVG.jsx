import React from 'react'
import styled from 'styled-components'

const HeartIcon = styled.svg`
  position: ${props => props.position || 'relative'};
  width: ${props => props.width || '24'}px;
  height: ${props => props.height || '24'}px;
  stroke: ${props => props.stroke || props.theme.backgroundSecondary};
`

const HeartSVG = props => {
  const { position, width, height, top, left, stroke } = props
  return (
    <HeartIcon
      position={position}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill={'none'}
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather-search'>
      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
    </HeartIcon>
  )
}

export default HeartSVG
