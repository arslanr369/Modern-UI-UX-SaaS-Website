import React from 'react'
import {features} from '../constants'

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className='container'>
            <div className='relative flex md:flex-wrap flex-nowrap broder-2
            border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-afer md:g7
            max-md:border-none max-md:rounded-none max-md:gap_3'>
            {features.map()(features)=>(
                <div key={id}>
                {features.title}
                </div>
            )}
            </div>
        </div>
      </Element>
    </section>
  )
}

export default Features
