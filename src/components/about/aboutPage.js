'use strict';

var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback){
			if(!confirm('voce realmente quer ver esta pagina?')){
				transition.about();
			} else{
				callback();
			}
		},
		willTransitionFrom: function(transition, component){
			if(!confirm('voce realmente quer sair esta pagina?')){
				transition.about();
			}
		}
	},
	render: function() {
		return (
			<div>
				<h1> About</h1>
				<p>
					This aplication use the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;