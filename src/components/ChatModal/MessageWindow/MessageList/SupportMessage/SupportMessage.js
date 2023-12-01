import React from 'react'
import iconSupport from '../../../../../assets/icons/support.png'
export default function SupportMessage() {
	return (
		<li className='message-window__message message-support'>
			<div className='message-support__image'>
				<img src={iconSupport} />
			</div>
			<div className='message-support__body'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text
			</div>
			<div className='message-support__time'>11:28</div>
		</li>
	)
}
