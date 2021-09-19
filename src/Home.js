import React from 'react';
import './styles/Home.css';
import Typography from '@material-ui/core/Typography';
import Me from './assets/Images/Me.jpg';
import * as Constants from './Const';

export default function Home() {
  return (
    <div className="Home">
      I&apos;m a software engineer at Microsoft and recently graduated from UofM. Go Blue!

      <div className="ContentContainer">
        <div className="ImageContainer">
          <img className="ProfilePicture" src={Me} alt="Me with a cheeky grin!" />
          pc: Gabi de Coster
        </div>
        <div className="InterestsHeader">
          <Typography variant="h5">
            Interests
          </Typography>
          <Typography className="ListInterests">
            Distributed Systems
            <br />
            Infrastructure
            <br />
            Web Development
          </Typography>

          <Typography variant="h5">
            Vibes
          </Typography>
          <Typography className="ListInterests">
            Coffee Shops
            <br />
            <a className="HiddenLink" target="_" href={Constants.SPOTIFY_ACCOUNT_URL}>
              Music
            </a>
            <br />
            Animal Fun Facts
          </Typography>

          <Typography variant="h5">
            Burrito Bracket
          </Typography>
          <Typography className="ListInterests">
            Pancheros
            <br />
            Chipotle
            <br />
            Qdoba
            <br />
            Btb
          </Typography>

        </div>
      </div>
    </div>
  );
}
