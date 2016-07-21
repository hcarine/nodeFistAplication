'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var Author = React.createClass({
	getInitialState: function(){
		return {
			Authors: []
		};
	},
	componentDidMount: function() {
		if(this.isMoutend()){
			this.setState({ authors: AuthorApi.getAllAuthors() });
		}
	},
	render: function() {
		return (
			<div>
				<h1>Authors</h1>
				<AuthorList />
			</div>
		);
	}
});

module.exports = Author;