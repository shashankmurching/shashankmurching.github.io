import React from 'react';
import styled from 'styled-components';
import { Colors } from '../Const';

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;
`;

const ExpContentCont = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: ${props => props.color};
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const TitleCont = styled.div`
  width: 30%;
  height: 100%
  float: left;
`;

const Description = styled.div`
  width: 70%;
  height:100%;
  float: right;
  align: top;
`;

function ExperienceContent(props) {
  return (
    <ExpContentCont color={Colors.light_secondary}>
      <TitleCont>
        <h2 style={{"margin": "0px"}}> {props.name} </h2>
        <h4 style={{"margin": "0px"}}> {props.date} </h4>
        <h4> <i> {props.location} </i></h4>
      </TitleCont>
      <Description>
        <h4> <b> {props.title} </b> </h4>
        <p>
          [add content]
        </p>
      </Description>
    </ExpContentCont>
  );
}


export default class Experience extends React.Component {
  render () {

    return (
    	<ContentContainer>
        <ExperienceContent 
          name="Quicken Loans" 
          date="Summer 2017" 
          title="Software Engineering Internship"
          location="Detroit, MI"/>
        <ExperienceContent 
          name="Quicken Loans"
          date="Summer 2018"
          title="Software Engineering Internship"
          location="Detroit, MI"/>
        <br/>

        <h2> Extra-Curriculars </h2>
        <ExperienceContent 
          name="MHacks Core Team" 
          date="Jan 2017-Current" 
          title="Android Dev - Tech Team"
          location="University of Michigan"/>
        <ExperienceContent 
          name="Kappa Theta Pi" 
          date="Sept 2017-Current" 
          title="Website and Professional Development Committee"
          location="University of Michigan"/>

	    </ContentContainer>
    );
  }
}





