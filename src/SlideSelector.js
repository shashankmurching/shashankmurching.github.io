import React from 'react';
import {Button} from 'react-md';
import styled from 'styled-components';

const SelectorCont = styled.div`
	padding-bottom: 15px;
`;


export default class SlideSelector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttons: props.slides
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id) {
		this.props.onButtonSelect(id);
	}

	toggled(name) {
		return name === this.state.buttons[this.props.selectedID];
	}

 	render () {
  	return (
      <SelectorCont>
        {this.state.buttons.map((name, id) => ( <span key={id}>&nbsp;
        	<Button secondary raised={this.toggled(name)} flat={!this.toggled(name)} onClick={()=>this.handleClick(id)}> 
           	{name} 
        	</Button>&nbsp;</span>
        ))} 
      </SelectorCont>
  	);
  }
}