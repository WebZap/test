import React from 'react'
import smileWhite from '../../../assets/icons/smile_white.svg'
export default function HeaderModal() {
	return (
		<div className='title-app'>
			<button className='title-app__arrow arrow-button arrow-button_hover' />
			<div className='title-app__wrapp-title title'>
				<div className='title__box'>
					<div className='title__text'>Задайте любой вопрос </div>
					<img src={smileWhite} alt='smile whtie' />
				</div>
				<div className='title__status'>онлайн</div>
			</div>
		</div>
	)
}
