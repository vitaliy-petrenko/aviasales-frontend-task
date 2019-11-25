import React from 'react'
import './DoNotTouchThis.scss'
import Button from '../../components/ui/forms/Button'
import { Link } from 'react-router-dom'

const WTF: React.FC = () => {
  console.log('render')

  return (
    <div className='do-not-touch-this'>
      <div className='do-not-touch__d'></div>
      <div className='do-not-touch__o'></div>
      <div className='do-not-touch__n'></div>
      <div className='do-not-touch__o'></div>
      <div className='do-not-touch__t'></div>
      <div className='do-not-touch__t'></div>
      <div className='do-not-touch__o'></div>
      <div className='do-not-touch__u'>
        <Link to='/' className='yo-btn-wrap'>
          <Button size='lg' div type='secondary'>Уйти</Button>
        </Link>
      </div>
      <div className='do-not-touch__c'></div>
      <div className='do-not-touch__h'></div>
      <div className='do-not-touch__t'></div>
      <div className='do-not-touch__h'></div>
      <div className='do-not-touch__i'></div>
      <div className='do-not-touch__s'></div>
    </div>
  )
}

export default WTF
