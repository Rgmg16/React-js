import React from 'react'

function Firstcomp(myprops) {
  return (
    <div>
        <p>{myprops.firstname}</p>
        <p>{myprops.lastname}</p>
        <p>{myprops.birthday}</p>
    </div>
  )
}

export default Firstcomp