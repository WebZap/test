import ClientMessage from '../ClientMessage/ClientMessage'
import React from 'react'
import SupportMessage from './SupportMessage'

export default function MessageList() {
	return (
		<ul className='message-window__message-section'>
			<SupportMessage
				text={'dadsasadsadsadsadasdsadsadsadsadasdasdsadsadsadsadasdsada'}
			/>
			<SupportMessage
				text={'dadsasadsadsadsadasdsadsadsadsadasdasdsadsadsadsadasdsada'}
			/>
			<SupportMessage
				text={'dadsasadsadsadsadasdsadsadsadsadasdasdsadsadsadsadasdsada'}
			/>
			<SupportMessage
				text={'dadsasadsadsadsadasdsadsadsadsadasdasdsadsadsadsadasdsada'}
			/>
			<SupportMessage
				text={'dadsasadsadsadsadasdsadsadsadsadasdasdsadsadsadsadasdsada'}
			/>
			<SupportMessage
				text={'dadsasadsadsadsadasdsadsadsadsadasdasdsadsadsadsadasdsada'}
			/>
			<ClientMessage
				text={'dadsasadsadsadsadasdsadsadsadsadasdasdsadsadsadsadasdsada'}
			/>
			<ClientMessage
				text={'dadsasadsadsadsadasdsadsadsadsadasdasdsadsadsadsadasdsada'}
			/>
			<SupportMessage
				text={'dadsasadsadsadsadasdsadsadsadsadasdasdsadsadsadsadasdsada'}
			/>
		</ul>
	)
}
