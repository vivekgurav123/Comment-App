import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const randomColorCheck = initialContainerBackgroundClassNames.indexOf(
  initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)],
)
console.log(`Check ${initialContainerBackgroundClassNames[randomColorCheck]}`)

const initialCommentList = []

// Write your code here
class Comments extends Component {
  state = {
    commentsList: initialCommentList,
    name: '',
    comment: '',
    count: initialCommentList.length,
  }

  onFormSubmit = ev => {
    ev.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  onNameUpdate = ev => {
    this.setState({
      name: ev.target.value,
    })
  }

  onCommentUpdate = ev => {
    this.setState({
      comment: ev.target.value,
    })
  }

  clickOnButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {
            ...eachComment,
            isLiked: !eachComment.isLiked,
          }
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentsList: filteredList,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentsList, name, comment, count} = this.state
    return (
      <div className="bg-container">
        <div className="space">
          <div className="comment">
            <div>
              <h1>Comments</h1>
              <p>Say something about 4.0 Technologies</p>
              <form onSubmit={this.onFormSubmit}>
                <input
                  placeholder="Your Name"
                  value={name}
                  onChange={this.onNameUpdate}
                />
                <br />
                <textarea
                  placeholder="Your Comment"
                  onChange={this.onCommentUpdate}
                  value={comment}
                />
                <br />
                <button type="submit">Add Comment</button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
          </div>
          <hr />
          <div>
            <p>
              <span>{count}</span> Comments
            </p>
            <ul className="comment-list">
              {commentsList.map(eachComment => (
                <CommentItem
                  key={eachComment.id}
                  clickOnButton={this.clickOnButton}
                  eachComment={eachComment}
                  onDeleteComment={this.onDeleteComment}
                  initialContainerBackgroundClassNames={
                    initialContainerBackgroundClassNames
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Comments
