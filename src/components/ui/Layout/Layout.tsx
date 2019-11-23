import React from 'react'
import './Layout.scss'

interface IProps {
  Sidebar?: React.ComponentType
}

const Layout: React.FC<IProps> = ({ Sidebar, children }) => (
  <div className='layout'>
    {Sidebar && (
      <div className='layout__sidebar'>
        <Sidebar/>
      </div>
    )}

    <div className='layout__main'>
      {children}
    </div>
  </div>
)

export default Layout
