import ChatModal from './components/ChatModal/ChatModal'
import ChatSupport from './components/ChatSupport/ChatSupport'
import React from 'react'

export default function App() {
	return (
		<div>
			{/* <div
				style={{
					backgroundColor: 'black',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
				}}
			>
				<ChatModal />
			</div> */}
			<ChatSupport />
		</div>
	)
}
