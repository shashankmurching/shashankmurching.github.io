import React from 'react';



export default class SpotifyContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: []
		}
	}


	render() {
		return (
			<div>
				insert spotify
				{this.state.artists.map((artist, id) => {
					<ArtistCont key={id} artistName={artist.name} imageUrl={artist.imageUrl} artistPage={artist.pageUrl}/> 
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