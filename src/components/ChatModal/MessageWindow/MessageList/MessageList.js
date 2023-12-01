import ClientMessage from './ClientMessage/ClientMessage'
import React from 'react'
import SupportMessage from './SupportMessage/SupportMessage'

export default function MessageList() {
	return (
		<ul className='message-window__message-section'>
			<SupportMessage />
			<SupportMessage />
			<ClientMessage />
			<ClientMessage />
			<SupportMessage />
		</ul>
	)
}
