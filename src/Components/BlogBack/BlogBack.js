import React, { Component } from 'react'
import '../BlogBack/BlogBack.css'

export default class BlogBack extends Component {
    constructor(props) {
        super(props)
        this.state = {data: []}
    }

    async componentDidMount() {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`)
            const data = await res.json()
            this.setState({
                data: data.splice(0,6)
            })
            console.log(data)
        }
        catch(err) {
            console.log(err,'BlogBack Error')
        }
    }
    render() {
        const {data} = this.state
        return (
            <div>
                <div className='title'>Comments</div>
                {data.map((val,{match})=> {
                    return(
                        <div className="columns is-multiline" key={val.id}>
                            <div className="column">
                            <h3 key={val.id}><b>Name:</b>{val.name}</h3>
                            <blockquote><b>E-mail:</b>{val.email}</blockquote>
                            <h4><b>Message:</b>{val.body}</h4>
                            </div>
                        </div>
                    )
                })}
                <hr/>
            </div>
        )
    }
}

