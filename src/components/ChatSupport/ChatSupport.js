import './ChatSupport.scss'

import React from 'react'
import support from '../../assets/icons/support.png'

const ChatSupport = () => {
	return (
		<body className='body'>
			<div className='container center'>
				<header className='header'></header>
				<div className='container__wrap'>
					<main className='main'>
						<section className='main__nav nav'>
							<div className='nav__wrap'>
								<div className='nav__title'>
									<h1>Кабинет</h1>
								</div>
								<div className='nav__user-lend user-lend'>
									<div className='user-lend__img'>
										<img src={support} alt='user-img' />
									</div>
									<div className='user-lend__body'>
										<div className='user-lend__wrap-user-data'>
											<p className='user-lend__name'>Виктория</p>
											<p className='user-lend__mail'>viktoriatp@mail.ru</p>
										</div>
									</div>
								</div>
								<nav className='nav__block'>
									<ul className='nav__body'>
										<li className='nav__list'>
											<p>Сообщения</p>
										</li>
										<li className='nav__list'>
											<p>Настройки</p>
										</li>
										<li className='nav__list'>
											<p>Необходима авторизация...</p>
										</li>
									</ul>
									<div className='nav__list-templates'>
										<div className='nav__list-templates-title nav__list-templates-title--active'>
											<p>Шаблоны сообщений</p>
										</div>
										<ul className='nav__list-templates-body'>
											<li className='nav__list-templates-item'>
												<p>Необходима авторизация...</p>
											</li>
											<li className='nav__list-templates-item'>
												<p>Необходима авторизация...</p>
											</li>
											<li className='nav__list-templates-item'>
												<p>Необходима авторизация...</p>
											</li>
											<li className='nav__list-templates-item'>
												<p>Необходима авторизация...</p>
											</li>
											<li className='nav__list-templates-item'>
												<p>Необходима авторизация...</p>
											</li>
											<li className='nav__list-templates-item'>
												<p>Необходима авторизация...</p>
											</li>
										</ul>
									</div>
								</nav>
							</div>
						</section>
						<section className='main__chat chat'>
							<div className='chat__wrap-title'>
								<h1 className='chat__title'>Сообщения</h1>
							</div>
							<div className='chat__row-filter filter'>
								<button className='filter__button filter__button--active'>
									Мои сообщения
								</button>
								<button className='filter__button '>Входящие</button>
								<button className='filter__button '>Все</button>
							</div>

							<div className='chat__wrap-window'>
								<div className='chat__navigation navigation-chat'>
									<input
										className='navigation-chat__input'
										placeholder='Поиск'
									/>
									<ul className='navigation-chat__body'>
										<li className='navigation-chat__item'>
											<div className='navigation-chat__item-wrap'>
												<div className='navigation-chat__item-img'>
													<img src={support} />
												</div>

												<div className='navigation-chat__wrap-rows'>
													<div className='navigation-chat__item-1-row'>
														<div className='navigation-chat__item-user-name'>
															Алена Ермолина
														</div>
														<div className='navigation-chat__item-user-data-message'>
															15.03.23
														</div>
													</div>

													<div className='navigation-chat__item-2-row'>
														<div className='navigation-chat__item-message'>
															Не могу понять почему...
														</div>
														<div className='navigation-chat__wrap-items-attention'>
															<div className='navigation-chat__item-attention-clip'></div>
															<div className='navigation-chat__item-attention-notify'></div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className='navigation-chat__item'>
											<div className='navigation-chat__item-wrap'>
												<div className='navigation-chat__item-img'>
													<img src={support} />
												</div>

												<div className='navigation-chat__wrap-rows'>
													<div className='navigation-chat__item-1-row'>
														<div className='navigation-chat__item-user-name'>
															Алена Ермолина
														</div>
														<div className='navigation-chat__item-user-data-message'>
															15.03.23
														</div>
													</div>

													<div className='navigation-chat__item-2-row'>
														<div className='navigation-chat__item-message'>
															Не могу понять почему...
														</div>
														<div className='navigation-chat__wrap-items-attention'>
															<div className='navigation-chat__item-attention-clip'></div>
															<div className='navigation-chat__item-attention-notify'></div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className='navigation-chat__item'>
											<div className='navigation-chat__item-wrap'>
												<div className='navigation-chat__item-img'>
													<img src={support} />
												</div>

												<div className='navigation-chat__wrap-rows'>
													<div className='navigation-chat__item-1-row'>
														<div className='navigation-chat__item-user-name'>
															Алена Ермолина
														</div>
														<div className='navigation-chat__item-user-data-message'>
															15.03.23
														</div>
													</div>

													<div className='navigation-chat__item-2-row'>
														<div className='navigation-chat__item-message'>
															Не могу понять почему...
														</div>
														<div className='navigation-chat__wrap-items-attention'>
															<div className='navigation-chat__item-attention-clip'></div>
															<div className='navigation-chat__item-attention-notify'></div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className='navigation-chat__item'>
											<div className='navigation-chat__item-wrap'>
												<div className='navigation-chat__item-img'>
													<img src={support} />
												</div>

												<div className='navigation-chat__wrap-rows'>
													<div className='navigation-chat__item-1-row'>
														<div className='navigation-chat__item-user-name'>
															Алена Ермолина
														</div>
														<div className='navigation-chat__item-user-data-message'>
															15.03.23
														</div>
													</div>

													<div className='navigation-chat__item-2-row'>
														<div className='navigation-chat__item-message'>
															Не могу понять почему...
														</div>
														<div className='navigation-chat__wrap-items-attention'>
															<div className='navigation-chat__item-attention-clip'></div>
															<div className='navigation-chat__item-attention-notify'></div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className='navigation-chat__item'>
											<div className='navigation-chat__item-wrap'>
												<div className='navigation-chat__item-img'>
													<img src={support} />
												</div>

												<div className='navigation-chat__wrap-rows'>
													<div className='navigation-chat__item-1-row'>
														<div className='navigation-chat__item-user-name'>
															Алена Ермолина
														</div>
														<div className='navigation-chat__item-user-data-message'>
															15.03.23
														</div>
													</div>

													<div className='navigation-chat__item-2-row'>
														<div className='navigation-chat__item-message'>
															Не могу понять почему...
														</div>
														<div className='navigation-chat__wrap-items-attention'>
															<div className='navigation-chat__item-attention-clip'></div>
															<div className='navigation-chat__item-attention-notify'></div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className='navigation-chat__item navigation-chat__item--active'>
											<div className='navigation-chat__item-wrap'>
												<div className='navigation-chat__item-img'>
													<img src={support} />
												</div>

												<div className='navigation-chat__wrap-rows'>
													<div className='navigation-chat__item-1-row'>
														<div className='navigation-chat__item-user-name'>
															Алена Ермолина
														</div>
														<div className='navigation-chat__item-user-data-message'>
															15.03.23
														</div>
													</div>

													<div className='navigation-chat__item-2-row'>
														<div className='navigation-chat__item-message'>
															Не могу понять почему...
														</div>
														<div className='navigation-chat__wrap-items-attention'>
															<div className='navigation-chat__item-attention-clip'></div>
															<div className='navigation-chat__item-attention-notify'></div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className='navigation-chat__item'>
											<div className='navigation-chat__item-wrap'>
												<div className='navigation-chat__item-img'>
													<img src={support} />
												</div>

												<div className='navigation-chat__wrap-rows'>
													<div className='navigation-chat__item-1-row'>
														<div className='navigation-chat__item-user-name'>
															Алена Ермолина
														</div>
														<div className='navigation-chat__item-user-data-message'>
															15.03.23
														</div>
													</div>

													<div className='navigation-chat__item-2-row'>
														<div className='navigation-chat__item-message'>
															Не могу понять почему...
														</div>
														<div className='navigation-chat__wrap-items-attention'>
															<div className='navigation-chat__item-attention-clip'></div>
															<div className='navigation-chat__item-attention-notify'></div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className='navigation-chat__item'>
											<div className='navigation-chat__item-wrap'>
												<div className='navigation-chat__item-img'>
													<img src={support} />
												</div>

												<div className='navigation-chat__wrap-rows'>
													<div className='navigation-chat__item-1-row'>
														<div className='navigation-chat__item-user-name'>
															Алена Ермолина
														</div>
														<div className='navigation-chat__item-user-data-message'>
															15.03.23
														</div>
													</div>

													<div className='navigation-chat__item-2-row'>
														<div className='navigation-chat__item-message'>
															Не могу понять почему...
														</div>
														<div className='navigation-chat__wrap-items-attention'>
															<div className='navigation-chat__item-attention-clip'></div>
															<div className='navigation-chat__item-attention-notify'></div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className='navigation-chat__item'>
											<div className='navigation-chat__item-wrap'>
												<div className='navigation-chat__item-img'>
													<img src={support} />
												</div>

												<div className='navigation-chat__wrap-rows'>
													<div className='navigation-chat__item-1-row'>
														<div className='navigation-chat__item-user-name'>
															Алена Ермолина
														</div>
														<div className='navigation-chat__item-user-data-message'>
															15.03.23
														</div>
													</div>

													<div className='navigation-chat__item-2-row'>
														<div className='navigation-chat__item-message'>
															Не могу понять почему...
														</div>
														<div className='navigation-chat__wrap-items-attention'>
															<div className='navigation-chat__item-attention-clip'></div>
															<div className='navigation-chat__item-attention-notify'></div>
														</div>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>

								<div className='chat__window body-chat'>
									<div className='body-chat__header client-title'>
										<div className='client-title__body'>
											<div className='client-title__img'>
												<img src={support} alt='client-title__name' />
											</div>
											<div className='client-title__name'>Пользователь 1</div>
										</div>
									</div>

									<div className='chat__window window-chat'>
										<ul class='window-chat__container'>
											<li className=' message message--support'>
												{/* <div className='message__image-support'>
													<img src={iconSupport} />
												</div> */}
												<div className='message__body message__body--support'>
													<div className='message__text message__text--main-chat-support '>
														{/* {text} */}
														sadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsa
													</div>
													<div className='message__time'>11:20</div>
												</div>
											</li>
											<li className=' message message--support'>
												{/* <div className='message__image-support'>
													<img src={iconSupport} />
												</div> */}
												<div className='message__body message__body--support'>
													<div className='message__text message__text--main-chat-support '>
														{/* {text} */}
														sadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsa
													</div>
													<div className='message__time'>11:21</div>
												</div>
											</li>
											<div class='window-chat__center-data-item'>
												<div className='window-chat__info-data-item'>
													<p>12 мая</p>
												</div>
											</div>

											<li className='message message--client'>
												<div className='message__body message__body--client'>
													<div className='message__text message__text--main-chat-client'>
														sadadsadassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
														{/* {text} */}
													</div>
												</div>
												<div className='message__time'>11:22</div>
											</li>
											<li className=' message message--support'>
												{/* <div className='message__image-support'>
													<img src={iconSupport} />
												</div> */}
												<div className='message__body message__body--support'>
													<div className='message__text message__text--main-chat-support '>
														{/* {text} */}
														sadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsasadasdsadsadsadsadasdsadsadsadsadsadsa
													</div>
													<div className='message__time'>11:23</div>
												</div>
											</li>
											<li className='file'>
												<div class='file__item'>
													<div class='file__type'>.png</div>
													<p class='file__name'>File 1...</p>
												</div>
												<div class='file__item'>
													<div class='file__type'>.png</div>
													<p class='file__name'>File 1...</p>
												</div>
											</li>
										</ul>
									</div>
									<input
										className='chat__send'
										placeholder='Написать сообщение...'
									/>
								</div>
							</div>
						</section>
					</main>
				</div>
				{/* <footer className='footer'></footer> */}
			</div>
		</body>
	)
}

export default ChatSupport
