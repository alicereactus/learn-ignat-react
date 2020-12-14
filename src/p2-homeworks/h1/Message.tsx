import React from "react";
import s from './Message.module.css'

type messagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: messagePropsType) {
  return (
    <div className={s.messageWrapper} >
      <div className={s.avatar}>
        <img src={props.avatar} alt='avatar' />
      </div>
      <div className={s.messageInfo} >
        <div className={s.messagePersonName} >
          <p>{props.name}</p>
        </div>
        <div className={s.messageText} >
          <p>{props.message}</p>
        </div>
        <div className={s.messageTime} >
          <span>{props.time}</span>
        </div>
      </div>
    </div>
  );
}

export default Message;