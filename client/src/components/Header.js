const React = require('react');

function Header(props) {
	return (
		<div>
			<h2>{props.text}</h2>
		</div>
	);
}

module.exports = Header;
