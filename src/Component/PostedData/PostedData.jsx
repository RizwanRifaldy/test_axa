import React from 'react'
import css from './PostedData.module.scss'
import ListComment from '../ListComment/ListComment'

const PostedData = (props) => {

  return (
    <div className={css.wrap}>
      <div className={css.title}>{props.data.title}</div><br/>
      <div className={css.body}>{props.data.body}</div><br/>
      <div className='left'>Comment</div> 
      <div className='right'>
        <label onClick={() => props.delete(props.data.id) }>Delete</label> | Edit
      </div> 
      <br/><br/>
      <ListComment id={props.data.id}/>
    </div>
  )
}

export default PostedData