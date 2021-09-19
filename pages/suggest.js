import { useState } from 'react'
import { send } from 'emailjs-com'

import TextareaAutosize from 'react-textarea-autosize'
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
		<div className="">
			<h1 className="text-5xl font-semibold text-primary-900 text-center mb-4">Suggest</h1>
			<p>If you'd like to suggest an article or an idea, use the form below! Optionally, include your email so that I can contact you about your idea if I have any questions.</p>
			<div className="flex mt-4">
				<form className="mx-auto flex flex-col" onSubmit={onSubmit}>
					<div className="flex mb-4">
					<input
						type='text'
						name='from_name'
						placeholder='Your Name'
						value={toSend.from_name}
						onChange={handleChange}
						className="mr-2 rounded"
						required 
					/>

					<input
						type='text'
						name='reply_to'
						placeholder="Your Email"
						value={toSend.reply_to}
						onChange={handleChange}
						className="rounded"
					/>
					</div>

					<TextareaAutosize
						type='text'
						name='message'
						placeholder='Your Message'
						value={toSend.message}
						onChange={handleChange}
						className="rounded"
						required 
					/>
			
					<button className="font-semibold mt-4 text-accent-900" type='submit'>Send</button>

					<span className="text-primary-500">{message}</span>
				</form>
			</div>
		</div>
	)
}
