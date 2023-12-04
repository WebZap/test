import React from 'react'

export default function ClientMessage({ text }) {
	return (
		<li className='message-window__message  message message--client'>
			<div className='message__body message__body--client'>
				<div className='message__text message__text--client'>{text}</div>
			</div>
			<div className='message__time'>11:28</div>
		</li>
	)
}
