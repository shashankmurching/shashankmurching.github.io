import React from 'react';
import {Button} from 'react-md';

class Slider extends React.Component {
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
      <div>
        {this.state.buttons.map((name, id) => (
          <Button key={id} raised={this.toggled(name)} flat={!this.toggled(name)} onClick={()=>this.handleClick(id)}> 
           	{name} 
         	</Button>
        ))} 
      </div>
  	);
  }
}

export default Slider;