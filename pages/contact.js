import { useState } from 'react'
import { send } from 'emailjs-com'

export default function Contact() {
	const [toSend, setToSend] = useState({
		from_name: '',
		message: '', 
		reply_to: '',
	});

	const [message, setMessage] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		send(
			'service_sqqur6j', 
			'template_gbm6i67',
			toSend, 
			'user_YYNWXkVmSohHJhKZecVNT'
		)
			.then((response) => {
				setMessage('Sent!');
			})
			.catch((error) => {
				setMessage(error);
			});	
	}

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					name='from_name'
					placeholder='Your Name'
					value={toSend.from_name}
					onChange={handleChange}
				/>


				<input
					type='text'
					name='message'
					placeholder='Your Message'
					value={toSend.message}
					onChange={handleChange}
				/>

				<input
					type='text'
					name='reply_to'
					placeholder="Your Email"
					value={toSend.reply_to}
					onChange={handleChange}
				/>
				<button type='submit'>Send</button>
				<span className="text-primary-500">{message}</span>
			</form>
		</div>
	)
}
