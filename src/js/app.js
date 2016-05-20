let React = require('react');
let ReactDOM = require('react-dom');

let Main = React.createClass({
	render() {
		return (
			<div>Working</div>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('reactDiv'));