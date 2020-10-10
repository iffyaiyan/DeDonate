import React, { useState } from "react"; 
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardImg, CardSubtitle, CardText, Row, Col, CardBody } from 'reactstrap';
import classnames from 'classnames';
import logo from '../images/logo.jpeg';
import logo1 from '../images/logo1.jpeg';
import Me from '../images/Me.jpg';
import Me1 from '../images/Me1.jpg';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="container bg">
      <div className="row">
          <div className="col-12">
            <h3 className="exp-heading">Select the criteria from below tabs whom you would like to donate to..</h3>
            <hr />
          </div>
      </div>
      <div className="row">
      <div className="col-12">
        <Nav tabs>
          <NavItem>
            <NavLink type="button"
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              <i className="fa fa-graduation-cap fa-lg"></i> Education
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink type="button"
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              <i className="fa fa-futbol-o fa-lg"></i> Sports
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink type="button"
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              <i className="fa fa-outdent fa-lg"></i> Others
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
            <Col sm="4">
                <Card>
                  <img width="100%" height="250px" src={logo} alt="Card cap" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="info"><i className="fa fa-usd fa-lg"></i> Donate Now</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                <CardImg width="100%" height="250px" src={logo1} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="info"><i className="fa fa-usd fa-lg"></i> Donate Now</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="4">
                <Card>
                <CardImg width="100%" height="250px" src={Me} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="info"><i className="fa fa-usd fa-lg"></i> Donate Now</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                <CardImg width="100%" height="250px" src={logo} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="info"><i className="fa fa-usd fa-lg"></i> Donate Now</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                <CardImg width="100%" height="250px" src={Me1} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="info"><i className="fa fa-usd fa-lg"></i> Donate Now</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="4">
                <Card>
                  <CardImg width="100%" height="250px" src={logo} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="info"><i className="fa fa-usd fa-lg"></i> Donate Now</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                <CardImg width="100%" height="250px" src={Me} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="info"><i className="fa fa-usd fa-lg"></i> Donate Now</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                <CardImg width="100%" height="250px" src={Me1} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="info"><i className="fa fa-usd fa-lg"></i> Donate Now</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                <CardImg width="100%" height="250px" src={logo1} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="info"><i className="fa fa-usd fa-lg"></i> Donate Now</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        </div>
      </div>
    </div>
  );
}

export default Explore;