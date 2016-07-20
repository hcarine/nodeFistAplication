'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Author = React.createClass({
	getInitialState: function(){
		return {
			Authors: []
		};
	},
	componentWillMount: function() {
		this.setState({ authors: AuthorApi.getAllAuthors() });
	},
	render: function() {
		var createAuthorRow = function(authors) {
			return (
				<tr key={authors.id}>
					<td> <a href={"/#authors/" + authors.id}> {authors.id} </a></td>
					<td>{authors.firstName} {authors.lastName}</td>
				</tr>
			);
		};
		return (
			<div>

				<h1>Authors</h1>

				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.state.Authors.map(createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Author;