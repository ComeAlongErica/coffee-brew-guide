import React from 'react'
import { ArrowRightCircle, ArrowLeftCircle } from 'react-feather'

import { ContainerForStickyArrows, RightArrow, LeftArrow } from '../../assets/styles.js'

const ScrollNavigation = props => {
  const { index, expand, direction, showArrow } = props
  const scrollContainers = document.getElementsByClassName('card-scroll-container')
  let containerIdx = scrollContainers && scrollContainers.length === 4 ? index : index - 1
  const scrollContainer = scrollContainers && scrollContainers[containerIdx]

  const handleScroll = direction => {
    let halfWindowSize = window.innerWidth / 2
    let currentPosition = scrollContainer.scrollLeft
    let scrollDistance

    if (direction) {
      scrollDistance = currentPosition + halfWindowSize
    } else {
      scrollDistance = currentPosition - halfWindowSize
    }

    scrollContainer.scrollLeft = scrollDistance
  }
  return (
    <ContainerForStickyArrows enterDirection={direction}>
      <LeftArrow
        className={'arrow'}
        onClick={() => handleScroll(false)}
        showArrow={showArrow.left}
        expand={expand}
        left>
        <ArrowLeftCircle height={50} width={50} color={'#f9bd35'} />
      </LeftArrow>
      <RightArrow
        className={'arrow'}
        onClick={() => handleScroll(true)}
        showArrow={showArrow.right}
        expand={expand}
        right>
        <ArrowRightCircle height={50} width={50} color={'#f9bd35'} />
      </RightArrow>
    </ContainerForStickyArrows>
  )
}

export default ScrollNavigation