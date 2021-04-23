import React from 'react'
import { DiGithubBadge } from 'react-icons/di'

const Content = () => {
	const pictureStyle = {
		marginTop: "50px",
		display: "block",
		margin: "auto",
    width: "30%",
	}

	const btnStyle = {
		margin: "auto",
    width: "30vmin",
		height: "30vmin",
	}
	
	return (
		<div>
			<div className="picture">
				<img src="https://avatars.githubusercontent.com/u/20875849?v=4" className="img-thumbnail" style={ pictureStyle } alt="GithubProfileImage"/>
			</div>
			<div className="contact-btns">
				<a href="https://github.com/samisafatli"><DiGithubBadge style={btnStyle}/></a>
				<a href="https://github.com/samisafatli"><DiGithubBadge style={btnStyle}/></a>
				<a href="https://github.com/samisafatli"><DiGithubBadge style={btnStyle}/></a>
			</div>
		</div>
	)
}

export default Content