import React from 'react';
import styled from 'styled-components';
import Me from '../Assets/Images/Me.jpg';
//import SpotifyContent from './SpotifyContent';


const ImageCont = styled.img`
	float: left;
	padding-right: 40px;
	height: 700px;
`;

const WelcomeIntro = styled.h2`
	font-size: large;
	padding-bottom: 10px;
	overflow: auto;
`;

const InterestsList = styled.ul`
  list-style-type: none;
  font-size: medium;
`;

const AboutMeCont = styled.div`
	justify-content: center;
	align-items: center;
`;


export default class AboutMe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dogUrl: ''
		}
	}

	componentDidMount() {
		/*fetch('https://dog.ceo/api/breeds/image/random')
			.then(response => {
				if (response.status >= 400) {
					throw new Error('Bad server response');
				}
				return response.json();
			}).then(responseJSON => {
				this.setState({dogUrl: responseJSON['message']});
				console.log(this.state.dogUrl);
			})
		*/
		console.log('Mounted component.')
	}


	techInterests() {
		const tech_interests = ['Web Development', 'Machine Learning', 'Open Source'];
		const listInterests = tech_interests.map((interest, id) =>
			<li key={id}>{interest}</li>);

		return <InterestsList> 
					{listInterests}
				</InterestsList>;
	}

	otherInterests() {
		const other_interests = ['Music', 'Coffee Shops', 'Animal Fun Facts'];
		const listInterests = other_interests.map((interest, id) =>
			<li key={id}>{interest}</li>);

		return <InterestsList> 
					{listInterests}
				</InterestsList>;
	}

	render () {
		return (
			<AboutMeCont>
				<WelcomeIntro>
					I'm a rising Senior at the University of Michigan 
					- majoring in Computer Science
					and minoring in Mathematics.
				</WelcomeIntro>
					<div>
						<ImageCont src={Me}/>
						<h2> Interests </h2>
						{this.techInterests()}
						<h2> Non-Tech Interests </h2>
						{this.otherInterests()}
					</div>
			</AboutMeCont>
		);
	}
}