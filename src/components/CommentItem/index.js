// Write your code here
import {Component} from 'react'
import './index.css'

class CommentItem extends Component {
  render() {
    const {
      eachComment,
      clickOnButton,
      onDeleteComment,
      initialContainerBackgroundClassNames,
    } = this.props
    const {id, name, comment, isLiked, date} = eachComment

    const onLike = () => {
      clickOnButton(id)
    }
    const onDelete = () => {
      onDeleteComment(id)
    }

    const randomColorCheck = initialContainerBackgroundClassNames.indexOf(
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ],
    )

    const imgUrl = isLiked
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    return (
      <li className="list-item">
        <div className="section">
          <p
            className={`initial ${initialContainerBackgroundClassNames[randomColorCheck]}`}
          >
            {name.slice(0, 1)}
          </p>
          <div className="profile">
            <div className="time">
              <h1>{name}</h1>
              <p>{date.getMinutes()}</p>
            </div>
            <p>{comment}</p>
          </div>
        </div>
        <div className="images">
          <button type="button" onClick={onLike}>
            <img src={imgUrl} alt="Like" /> Like
          </button>
          <button type="button" data-testid="delete" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
              alt="delete"
            />
          </button>
        </div>
        <hr />
      </li>
    )
  }
}

export default CommentItem
