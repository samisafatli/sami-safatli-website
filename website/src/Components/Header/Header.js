import React from 'react'

const Header = () => {
	const logoStyle = {
		textAlign: "left",
		width: "100%",
		paddingBottom: "10px",
	}
	const contactStyle = {
		textAlign: "right",
		width: "100%",
		color: "white"
	}
	return (
		<div>
			<nav className="navbar navbar-expand-lg" style={{backgroundColor: "#1e365c"}}>
				<div className="container" style={{borderStyle:"none none solid none", borderColor: "white"}}>
					<div className="logo" style={logoStyle}>
						<img src="/assets/logo.png" alt="logo_image" href="#" style={{height: "50px"}}/>
					</div>
					<div className="contact" style={contactStyle}>
						<h4><a href="contact" style={{color:"white"}}>Contact</a></h4>
					</div>
				</div> 
			</nav>
		</div>
	)
}

export default Header