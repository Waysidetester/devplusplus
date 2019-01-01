import React from 'react';
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import fbApi from '../../helpers/data/fbApi/fbApi';
import './addInterest.scss';


const defaultTask = {
  title: '',
  link: '',
  type: '',
  isComplete: false,
};

class addInterest extends React.Component {
  state = {
    newTask : defaultTask
  }

  updateTask = (input, e) => {
    const updatedTask = { ...this.state.newTask };
    updatedTask[input] = e.target.value;
    this.setState({ newTask: updatedTask })
  }

  addTaskToDatabase = () => {
    if (this.state.newTask.title && this.state.newTask.link && this.state.newTask.type) {
      fbApi.addTrackedItem(this.state.newTask);
    } else {
      console.log('empty string');
    }
  }

  render() {
    return (
      <div>
        <h2>Add Interest section</h2>
        <FormGroup>
          <Input
          type="text"
          name="task"
          id="task"
          placeholder="Task to Complete"
          onChange={(e) => {this.updateTask('title', e)}}
          />
        </FormGroup>
        <FormGroup>
          <Input
          type="text"
          name="link"
          id="link"
          placeholder="Link to Task"
          onChange={(e) => {this.updateTask('link', e)}}
          />
        </FormGroup>
        <FormGroup >
            <Label check>
              <Input
              type="radio"
              name="radio1"
              value="Tutorial"
              onChange={(e) => {this.updateTask('type', e)}}
              />{'Tutorial'}
              
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
              type="radio"
              name="radio1"
              value="Blog"
              onChange={(e) => {this.updateTask('type', e)}}
              />{'Blog'}
              
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
              type="radio"
              name="radio1"
              value="Resource"
              onChange={(e) => {this.updateTask('type', e)}}
              />{'Resource'}
              
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
              type="radio"
              name="radio1"
              value="Podcast"
              onChange={(e) => {this.updateTask('type', e)}}
              />{'Podcast'}
              
            </Label>
          </FormGroup>
          <button
          className="btn btn-success"
          onClick={this.addTaskToDatabase}
          >Submit</button>
      </div>
    );
  }
}

export default addInterest;
