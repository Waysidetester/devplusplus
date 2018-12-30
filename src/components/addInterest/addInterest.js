import React from 'react';
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import './addInterest.scss';

class addInterest extends React.Component {
  render() {
    return (
      <div>
        <h2>Add Interest section</h2>
        <FormGroup>
          <Input type="password" name="password" id="examplePassword" placeholder="Task to Complete" />
        </FormGroup><FormGroup>
          <Input type="password" name="password" id="examplePassword" placeholder="Link to Task" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />
            Check me out
          </Label>
        </FormGroup>
      </div>
    );
  }
}

export default addInterest;
