import MessageList from './MessageList/SupportMessage/MessageList'
import React from 'react'
import SendField from './SendField/SendField'

export default function MessageWindow() {
	return (
		<div className='message-window'>
			{/* <AgreementMessage /> */}
			<MessageList />
			<SendField />
		</div>
	)
}
