import React, { PureComponent } from 'react'

import { Comment, Avatar, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export default class CommentItem extends PureComponent {
  render() {
    const { nickname, avatar, content, datetime } = this.props.comment
    return (
      <Comment
        author={<a href="/#">{nickname}</a>}
        avatar={<Avatar src={avatar} alt="Han Solo" />}
        content={content}
        datetime={
          <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{datetime.fromNow()}</span>
          </Tooltip>
        }
        actions={[<DeleteOutlined onClick={() => this.removeComment()} />]}
      />
    )
  }
  removeComment() {
    this.props.removeComment()
  }
}
