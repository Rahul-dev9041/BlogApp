import React from 'react'


export default function Posts(props) {
    return (
        <div className='section'>
            <div className="column card">
                <h3>Name:{props.name}</h3>
                <blockquote>E-mail:{props.email}</blockquote>
            <h4>Mesaage:{props.body}</h4>
            </div>
            
        </div>
    )
}
