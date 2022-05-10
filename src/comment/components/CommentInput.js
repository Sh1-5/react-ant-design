import React, { PureComponent } from 'react'

import moment from 'moment'

import { Input, Button } from 'antd'
const { TextArea } = Input

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  render() {
    return (
      <>
        <TextArea
          rows={4}
          cols={30}
          value={this.state.content}
          onChange={(e) => this.handleChange(e)}
        />
        <Button
          type="primary"
          style={{ marginTop: '20px' }}
          onClick={() => this.addComment()}
        >
          添加评论
        </Button>
      </>
    )
  }
  handleChange(e) {
    this.setState({
      content: e.target.value
    })
  }
  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avatar:
        'https://p9-passport.byteacctimg.com/img/user-avatar/2d5c7a985849e8fd86d12df9a07a5f7f~300x300.image',
      nickname: 'kobe',
      datetime: moment(),
      content: this.state.content
    }
    this.props.submitComment(commentInfo)
    this.setState({
      content: ''
    })
  }
}
