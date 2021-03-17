import React from 'react'
import '../BlogFront/BlogFront.css'
import {Link} from 'react-router-dom'


const Preview = ({imageUrl,title,body}) => {
return(
        <div className="column is-half">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imageUrl} alt=""/>
                </figure>
            </div>
            <div className="card-content">
                <div className="subtitle is-4">
                    {title}
                </div>s
            </div>
            <div className="content">
                {body}
            </div>
            <div className="buttons">
                <button className='button is-primary'>
                  <Link to={'sss'}>Read More...</Link>
                </button>
            </div>
        </div>
)
}


export default function Blog(props) {
    const image = props.id % 2 === 0 ? <Preview title={props.title} body={props.body}  imageUrl='https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-grand-canyon.jpg'/> : 
                                      <Preview title={props.title} body={props.body}  imageUrl='https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-maui-hawaii.jpg'/> ?
                                      <Preview title={props.title} body={props.body}  imageUrl='https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-rome-italy.jpg'/>  :
                                      <Preview title={props.title} body={props.body}  imageUrl='https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-machu-picchu-peru.jpg'/>            
    return(
          <div className="container">
              <div className="is-multiline">
                  {image}
              </div>
          </div>
    )
}
