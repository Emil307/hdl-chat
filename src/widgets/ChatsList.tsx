import React from 'react';
import {connect} from 'faketime-db-sdk';

const ChatsList: React.FC = () => {
  const db = connect({url:"http://devsync.tech/db", apikey:""});

  db.select("*").from("Chat").query().then(rows => {
    console.log(rows);
  });

  return (
    <div>ChatsList</div>
  )
}

export default ChatsList;
