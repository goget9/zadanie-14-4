var MoviesList = React.createClass({
	propTypes: {
		movie: React.PropTypes.array.isRequired,
	},

	render: function() {
		var movieList = this.props.movie.map(function(movies) {
			return React.createElement(Movie, {item: movies, key: movies.id})
		});

		return (
			React.createElement('ul', {}, movieList)
		);
	}
});

var Movie = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {title: this.props.item}),
				React.createElement(MovieDescription, {description: this.props.item}),
				React.createElement(MovieImdb, {imdb: this.props.item}),
				React.createElement(MoviePoster, {poster: this.props.item}),	
			)
		)
	},
});
var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.object.isRequired,
	},

	render: function() {
		return React.createElement('h1', {}, 'Movie Title: ' + this.props.title.title)
	},
});
var MovieDescription = React.createClass({
	propTypes: {
		description: React.PropTypes.object.isRequired,
	},

	render: function() {
		return React.createElement('p', {}, 'Movie Description: ' + this.props.description.desc)
	},
});
var MovieImdb = React.createClass({
	propTypes: {
		imdb: React.PropTypes.object.isRequired,
	},

	render: function() {
		return React.createElement('p', {}, 'Movie IMDB Rating: ' + this.props.imdb.imdb)
	},
});
var MoviePoster = React.createClass({
	propTypes: {
		poster: React.PropTypes.object.isRequired,
	},

	render: function() {
		return React.createElement('img', {src: this.props.poster.poster})
	},
});

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		imdb: '7,8',
		poster: 'hp.png'
	},
	{
		id: 2,
		title: 'Bekarty Wojny',
		desc: 'film o gosciach w czasie 2 wojny swiatowej',
		imdb: '7,8',
		poster: 'bw.png'

	},
	{
		id: 3,
		title: 'Interstaller',
		desc: 'film o gosciu w czasie',
		imdb: '9.0',
		poster: 'is.png'

	}
];

var element = React.createElement(MoviesList, {movie: movies}, {});
ReactDOM.render(element, document.getElementById('app'));
