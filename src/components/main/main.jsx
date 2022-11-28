import React from 'react'
import Aside from '../aside/aside'
import Name from '../name/name'
import "./main.css"

function Main() {
return (
<div className="main">
    <div className="container">
        <Aside />
        <Name />
    </div>
</div>
)
}

export default Main