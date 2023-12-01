import React from 'react'

export default function AgreementMessage() {
	return (
		<div className='message-window__agreement agreement'>
			<div class='agreement__text'>
				Отправляя сообщение, вы даете{' '}
				<span className='agreement__text-span'>согласие</span> на обработку{' '}
				<span className='agreement__text-span'> персональных данных </span>
			</div>
		</div>
	)
}
