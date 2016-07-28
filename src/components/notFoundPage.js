'use strict';

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Pagina nao encontrada</h1>
				<p> Whoops! sorry, there is nothing to see here.</p>
				<p><Link to="app">Voltar a pagina inicial</Link></p>
			</div>
		);
	}
});

module.exports = NotFoundPage;