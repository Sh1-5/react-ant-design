import React, { PureComponent } from 'react'

import CommentInput from '@/comment/components/CommentInput'
import CommentItem from '@/comment/components/CommentItem'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      commentList: []
    }
  }
  render() {
    return (
      <div style={{ width: '500px', padding: '20px' }}>
        {this.state.commentList.map((item, index) => {
          return (
            <CommentItem
              comment={item}
              key={item.id}
              removeComment={() => this.removeComment(index)}
            />
          )
        })}
        <CommentInput submitComment={(info) => this.submitComment(info)} />
      </div>
    )
  }
  submitComment(info) {
    this.setState({
      commentList: [...this.state.commentList, info]
    })
  }
  removeComment(index) {
    const newCommentList = [...this.state.commentList]
    newCommentList.splice(index, 1)
    this.setState({
      commentList: newCommentList
    })
  }
}
