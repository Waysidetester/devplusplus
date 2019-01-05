import React from 'react';
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import fbApi from '../../helpers/data/fbApi/fbApi';
import PropTypes from 'prop-types';
import './addInterest.scss';


const defaultTask = {
  title: '',
  link: '',
  type: '',
  isComplete: false,
};

class addInterest extends React.Component {
  static propTypes = {
    updateInterest: PropTypes.func
  }
  
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
      this.props.updateInterest();
      this.setState({ newTask: defaultTask });
    } else {
      console.log('empty string');
    }
  }

  render() {
    return (
      <div className='add-interest'>
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
        <div className='select-type'>
          <FormGroup check>
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
          </div>
          <div className='submit-task'>
          <button
          className="btn btn-success"
          onClick={this.addTaskToDatabase}
          >Submit</button>
          </div>
      </div>
    );
  }
}

export default addInterest;
