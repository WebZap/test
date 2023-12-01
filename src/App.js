import ChatModal from './components/ChatModal/ChatModal'
import React from 'react'

export default function App() {
	return (
		<div
			style={{
				backgroundColor: 'black',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}
		>
			<ChatModal />
		</div>
	)
}
