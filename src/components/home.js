import React, { Component } from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import image from './image.jpg';
import MetaMaskLoginButton from 'react-metamask-login-button';

class Home extends Component {
  render() {
    return (
     <div className="container">
      <h1 className="head">DeDonate</h1>
      <div className="row sub-head">
        <div className="col-md-8">
          <h4 className="content1">DeDonate is a decentralized platform for donation via the <strong>Ethereum</strong> blockchain. It allows people to donate to peers directly thus removing the frauds and faulty corrupted middleman and keeping the donation related activity anonymous!!</h4>
          <h3 className="content2">It allows charitable organizations to raise funds for their charitable activity through Ethereum blockchain.</h3>
        </div>
        <div className="col-md-4 metamask-btn">
          <MetaMaskLoginButton />
        </div>
      </div>
      <div className="row exp-req-btns">
        <div className="col-md-6 exp-btn">
          <Link to={`/explore`}>
            <Button color="danger" className="exp-btn1">Explore</Button>
          </Link>
        </div>
        <div className="col-md-6 eq-btn">
          <Link to={`/request`}>
            <Button color="danger" className="req-btn1">Request</Button>
          </Link>
        </div>
      </div>
      <div className="image">
        <img width="100%" src={image}></img>
      </div>
     </div>
    );
  }
}

export default Home;