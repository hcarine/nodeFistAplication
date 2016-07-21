'use strict';

var React = require('react');

var AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
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
				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.props.authors.map(createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = AuthorList;