import React from 'react';



export default class SpotifyContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: []
		}
	}

	componentDidMount() {
		const URL = 'https://api.spotify.com/v1/me/top/artists?limit=10';
		console.log(process.env.REACT_APP_SPOTIFY_AUTH_KEY + ", hi");
	}


	render() {
		return (
			<div>
				insert spotify
				{this.state.artists.map((artist, id) => {
					<ArtistCont artistName={artist.name} imageUrl={artist.imageUrl} artistPage={artist.pageUrl}/> 
				})}
			</div>
		);
	}
	
}


const ArtistCont = ({artistName, imageUrl, artistPage}) => {
	if (artistName === undefined || imageUrl === undefined || artistPage === undefined)
		return null;
	return <div>  hi </div>;
}