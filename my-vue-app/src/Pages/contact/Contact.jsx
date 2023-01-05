import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';

export default function Contact() {
	const githubUrl = import.meta.env.VITE_GITHUB_URL;
	const twitterUrl = import.meta.env.VITE_TWITTER_URL;
	const homePhotoUrl =
		'/data:image/jpeg;base64,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';
	const noMatchPhotoUrl =
		'https://github.com/Maz1231';
	const initialState = {
		username: '',
		email: '',
		message: ''
	};
	const [data, setData] = useState(initialState);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const resetForm = () => {
		setData(initialState);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setData({ ...data, [e.target.name]: e.target.value });
		resetForm();
	};
	

	return (
		<div className='form-container1'>
			<form className='form4' onSubmit={handleSubmit}>
				<label id='main_content' title='Full name' htmlFor='username'>
					Full name
				</label>
				<input
					type='text'
					name='username'
					min={3}
					max={20}
					required
					value={data.username}
					placeholder='Full name'
					autoComplete='username'
					onChange={handleChange}
					autoFocus={true}
				/>
				<label title='email' htmlFor='email'>
					Email
				</label>
				<input
					type='email'
					name='email'
					max={20}
					required
					value={data.email}
					placeholder='Email'
					autoComplete='email'
					onChange={handleChange}
				/>
				<label title='message' htmlFor='message'>
					Message
				</label>
				<textarea
					name='message'
					onChange={handleChange}
					placeholder='Your message'
				></textarea>
				<button title='Send' className='form-btn1'>
					Send
				</button>
			</form>
			<contact className='footer-container'>
			<div className='footer-icon-links'>
				<Link to={githubUrl}>
					<AiOutlineGithub title='github' className='footer-icon'  />
				</Link>
				<Link to={twitterUrl}>
					<AiFillTwitterCircle title='twitter' className='footer-icon' />
				</Link>
			</div>
			<div className='footer-credits'>
				<p>
					<em>Photos by: </em>
				</p>
				<Link to={homePhotoUrl} className='footer-credits-link'>
					<em>
						<span>Go Home</span> - Home
					</em>
				</Link>
				<Link to={noMatchPhotoUrl} className='footer-credits-link'>
					<em>
						<span> Mazin Idris</span> - No Match
					</em>
				</Link>
			</div>
		</contact>
		</div>
	);
}
