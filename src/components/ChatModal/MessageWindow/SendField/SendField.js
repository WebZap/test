import React from 'react'

export default function SendField() {
	return (
		<div className='message-input'>
			<textarea
				type='text'
				className='message-input__input'
				placeholder='Введите сообщение...'
			/>
			<div className='message-input__container-tools container-tools'>
				<label className='container-tools__clip'>
					<input type='file' accept='.txt, .pdf, .doc' />
				</label>
				<button className='container-tools__send-button arrow-button ' />
			</div>
		</div>
	)
}
