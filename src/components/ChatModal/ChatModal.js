import './ChatModal.scss'

import HeaderModal from './HeaderModal/HeaderModal'
import MessageWindow from './MessageWindow/MessageWindow'
import React from 'react'

export default function ChatModal() {
	return (
		<div className='chat-modal'>
			<HeaderModal />
			<MessageWindow />
		</div>
	)
}
