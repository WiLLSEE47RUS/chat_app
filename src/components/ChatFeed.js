import MessageForm from "./MessageForm.js";
import MyMessage from "./MyMessage.js";
import TheirMessage from "./TheirMessage.js";

const ChatFeed = (props) => {
	const { chats, activeChat, userName, messages } = props

	const chat = chats && chats[activeChat]

	const renderMessages = () =>{
		const keys = Object.keys(messages);

		return keys.map((key,index) => {
			const message = messages[key];
			const isMyMessage = userName === message.sender.username
			const lastMessageKey = index === 0 ? null : keys[index-1]

			return (
				<div key={`msg_${index}`} style={{ width: '100%' }}>
					<div className="message-block">
						{   isMyMessage
							? <MyMessage message={message} />
							: <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
					</div>
				</div>
			)
		})
	}

	if(!chat) return 'Start chatting...'

	return (
		<div className='chat-feed'>
			<div className="chat-title-container">
				<div className="chat-title">{chat?.title}</div>
				<div className="chat-subtitle">
					{chat.people.map((person) => ` ${person.person.username}`)}
				</div>
			</div>
			{renderMessages()}
			<div style={{height: '100px'}}/>
			<div className="message-form-container">
				<MessageForm {...props} chatId = {activeChat}/>
			</div>
		</div>
	);
};

export default ChatFeed;