import React from 'react'
import { Timeline } from '../components/TimeLine'
import { experiences } from '../constants'

const Experiences = () => {
  return (
    <div className='scroll-mt-[60px]'>
      <Timeline data={experiences} />
    </div>
  )
}

export default Experiences
