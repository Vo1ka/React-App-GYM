import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

export const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs__header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="programs__categories">
            {programsData.map((program => (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join">
                        <span>Join Now</span>
                        <img src={RightArrow}></img>
                    </div>
                </div>
            )))}
        </div>
    </div>
  )
}
