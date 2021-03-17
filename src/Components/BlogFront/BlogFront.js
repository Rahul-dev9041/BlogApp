import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PicsData from '../BlogBack/PicsData'
// import PicsData from '../BlogBack/PicsData'

export default class BlogFront extends Component {
    constructor(props) {
        super(props)
        this.state = {data: []}
    }
    async componentDidMount() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            console.log(data)
            this.setState({
                data: data.splice(1,6)
            })
            console.log(data)
        }
        catch(err) {
            console.log(err,'Error Occured')
        }
    }
    render() {
        const {data} = this.state
        return (
            <div>
                <div className="title">Latest Posts</div>
            {data.map((item) => {
                return (
                    <div className="column is-multiline is-half" key={item.id}>
            <div className="card-image">
                <figure className="image is-4by3">
                    {PicsData.map((unit,index) => (
                        <img src={unit.imgsrc} key={unit.id} id={index}alt=""/>
                    ))}
                    
                </figure>
            </div>
            <div className="card-content">
                <div className="subtitle is-4">
                    {item.title}
                </div>
            </div>
            <div className="content">
                {item.body}
            </div>
            <Link to={`/${item.id}`}>
            <div className="buttons">
                <button className='button is-primary'>
                 Read More...
                </button>
            </div>
            </Link>
       </div>
                )
            } )}
            </div>         
        )
}
}
