'use strict';

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
/*
var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
*/

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		<Route name="authors" handler={require('./components/authors/authorPage')} />
		<Route name="about" handler={require('./components/about/aboutPage')} />
		<NotFoundRoute handler={require('./components/notFoundPage')} />
		<Redirect from="about-us" to="about" />
		<Redirect from="awthors" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>
);

module.exports = routes;