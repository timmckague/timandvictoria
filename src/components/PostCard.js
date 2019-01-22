import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const PostCard = ({postUrl, image, title, description, date}) => (
  <Link to={`/${postUrl}/`}>
    <div className="card" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
      <div className="card-image" >
        <Img
          style={{height: 300}}
          className="image"
          fluid={image}
          alt={'blog thumbnail'}
        />
      </div>
      <div className="card-content" style={{height: '100%'}}>
        <div className="content" style={{height: '100%'}}>
          <div>
            <h2 className="is-size-4-mobile is-marginless has-text-black-ter">
              {title}
            </h2>
            <div className="is-size-5-mobile has-text-black-ter">
              {description}
            </div>
          </div>
          <div className="is-size-7 has-text-grey-darker has-text-weight-light">
            {date}
          </div>
        </div>
      </div>
    </div>
  </Link>
)

export default PostCard
