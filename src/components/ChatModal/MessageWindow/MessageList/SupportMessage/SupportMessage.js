import React from 'react'
import iconSupport from '../../../../../assets/icons/support.png'

export default function SupportMessage({ text }) {
	return (
		<li className='message-window__message message message--support'>
			<div className='message__image-support'>
				<img src={iconSupport} />
			</div>
			<div className='message__body message__body--support'>
				<div className='message__text message__text--support'>{text}</div>
				<div className='message__time'>11:28</div>
			</div>
		</li>
	)
}
