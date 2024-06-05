import React from 'react'

const titleStyle = {
    width:'fit-content',
    fontVariant:'small-caps',
    color: 'violet',
}

const hrStyle = {
    width:'100%',
    height:'3px',
    borderRadius:'50%',
    backgroundColor: 'blue',
}

const Title = ({text}) => {
  return (
    <div style={titleStyle}>
      <h4>{text || 'titolo'}</h4>
      <hr style={hrStyle}/>
    </div>
  )
}


export default Title
