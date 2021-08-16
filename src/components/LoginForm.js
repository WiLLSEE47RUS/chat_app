import { useState } from "react";
import axios from 'axios'

const LoginForm = () => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async e =>{
		e.preventDefault();

		const authObject = {
			'Project-ID': 'c55d0e06-a91e-4e8c-a349-c46979cbb2de',
			'User-Name': userName,
			'User-Secret': password,
		}

		try{
			await axios.get('https://api.chatengine.io/chats', {headers: authObject})

			localStorage.setItem('username', userName)
			localStorage.setItem('password', password)
			setError('')
			window.location.reload();
		}catch (error){
			setError('Что-то пошло не так')
		}

	}

	return (
		<div className= 'wrapper'>
			<div className="form">
				<h1 className='title'> Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value = {userName}
						onChange={(e) => setUserName(e.target.value)}
						placeholder='UserName'
						required
						className='input'
					/>
					<input
						type="password"
						value = {password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Password'
						required
						className='input'
					/>
					<div align = 'center'>
						<button type = 'submit' className = 'button'>
							<span>Start chatting</span>
						</button>
					</div>
					<h2 className="error">{error}</h2>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;