import React from 'react'
import './FiltersSection.scss'

interface IProps {
  title: string
}

const FiltersSection: React.FC<IProps> = ({ title, children }) => (
  <div className='filters-section'>
    <div className='filters-section__title'>
      {title}
    </div>
    <div className='filters-section__body'>
      {children}
    </div>
  </div>
)

export default FiltersSection
