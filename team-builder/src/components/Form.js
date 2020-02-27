import React, {useState, useEffect} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
function Form(props) {  

    let [member, setMember] = useState({name: '', email: '', position: ''})
    let [,setState] = useState();
    const updateName = e => {
        setMember({name: e.target.value, email: member.email, position: member.position});
    }
    const updateEmail = e => {
        setMember({name: member.name, email: e.target.value, position: member.position});
    }
    const updatePosition = e => {
        setMember({name: member.name, email: member.email, position: e.target.value});
    }
    const submit = e => {
        e.preventDefault();
       props.set.push(member);
       setState({});
    }
// useEffect(() => {
//     setState({});
// }, [])
    return(
        <div>
        <form onSubmit={submit}>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' onChange={updateName}/>

            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' onChange={updateEmail}/>

            <label htmlFor='select'>Position:</label>
            <select id='select' onChange={updatePosition}>
                <option value=''>Select An Option</option>
                <option value='Front End'>Front End</option>
                <option value='Back End'>Back End</option>
                <option value='UX Designer'>UX Designer</option>
                <option value='Student'>Student</option>
            </select>
        <button type='submit'>Add Team Member</button>
        </form>
    <p>{member.name}</p>
        {props.set.map(member => (
                <div key={Math.random() * member.name.length}>
                <Card>
                  <CardBody>
                    <CardTitle>{member.name}</CardTitle>
                    <CardSubtitle>{member.position}</CardSubtitle>
                    <CardText>{member.email}</CardText>
                  </CardBody>
                </Card>
              </div>
        ))}
</div>
    );
}

export default Form;