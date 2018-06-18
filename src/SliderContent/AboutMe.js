import React from 'react';
import styled from 'styled-components';
import Me from '../Assets/Images/Me.jpg';


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

export default class AboutMe extends React.Component {

	interests() {
		return <p> Get a list going </p>;
	}

	hobbies() {
		return <p> Hii </p>;
	}

  render () {
    return (
    	<div justify-content="center" align-items="center" width="100%" >
    		<WelcomeIntro>
					I'm a Junior at the University of Michigan 
					- majoring in Computer Science
					and minoring in Mathematics.
    		</WelcomeIntro>
				<div>
					<ImageCont src={Me}/>
					<h2> Interests </h2>
					{this.interests()}
					<h2> Hobbies </h2>
					{this.hobbies()}
				</div>
			</div>
    );
  }
}