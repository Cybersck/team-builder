import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function TeamCard(props) {
    console.log(props);
    return(
<div>
      <Card>
        <CardBody>
          <CardTitle>{props.member.name}</CardTitle>
          <CardSubtitle>{props.member.position}</CardSubtitle>
          <CardText>{props.member.email}</CardText>
        </CardBody>
      </Card>
    </div>
)}

export default TeamCard;