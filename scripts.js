var MoviesList = React.createClass({
	propTypes: {
		movie: React.PropTypes.array.isRequired,
	},

	render: function() {
		var movieList = this.props.movie.map(function(movies) {
			return React.createElement(Movie, {item: movies, key: movies.id});
		});

		return (
			React.createElement('ul', {}, movieList)
		);
	}
});

var Movie = React.createClass({
	propTypes: {
		item: React.PropTypes.array.isRequired,
	},

	render: function() {
		return (
			React.createElement('li', {},
				React.createElement('h1', {}, this.props.item.title),
				React.createElement('p', {}, this.props.item.desc),
				React.createElement('p', {}, this.props.item.imdb),
				React.createElement('img', {src: this.props.item.poster})
			)
		)
	},
});

var movies = [
	{
		id: 1,
		title: 'harry potter',
		desc: 'film o czarodzieju',
		imdb: '7,8',
		poster: 'hp.png'
	},
	{
		id: 2,
		title: 'harry potter',
		desc: 'film o czarodzieju',
		imdb: '7,8',
		poster: 'hp.png'

	}
];

var element = React.createElement(MoviesList, {movie: movies}, {});
ReactDOM.render(element, document.getElementById('app'));
