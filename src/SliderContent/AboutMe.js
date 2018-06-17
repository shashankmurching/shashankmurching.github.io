import React from 'react';

import styled from 'styled-components';
import Me from '../Assets/Images/Me.jpg';



const ImageCont = styled.img`
	float: left;
`;


export default class AboutMe extends React.Component {
  render () {
    return (
			<div display="table-cell">
				<ImageCont align="left" src={Me}/>

				<h2 align="center"> Interests</h2>
				<p> doo doo doooo </p>


				<h2 align="center"> Hobbies</h2>
				<p> so many things </p>
			</div>
    );
  }
}