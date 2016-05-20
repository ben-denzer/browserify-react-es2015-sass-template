let React = require('react');
let ReactDOM = require('react-dom');

let Main = React.createClass({
	render() {
		return (
			<div>React is Working (because you see this) - If the background is grey, SASS is working too.</div>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('reactDiv'));