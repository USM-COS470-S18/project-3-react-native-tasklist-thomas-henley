import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskUpdate, taskSave, taskDelete } from './actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskEdit extends Component {
  componentDidMount() {
    const t = this.props.task.item;

    Object.keys(t).forEach((prop, index) => {
      const value = t[prop];
      this.props.taskUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, description, complete } = this.props;
    this.props.taskSave({
      name,
      description,
      complete,
      uid: this.props.task.item.key,
      inMenu: true
    });
  }

  onDeletePress() {
    const { key } = this.props.task.item;
    this.props.taskDelete({ uid: key });
  }

  render() {
    return (
      <Card>
        <TaskForm {...this.props} />
        <CardSection>
          <Button onPress={this.onDeletePress.bind(this)}>Delete</Button>
          <Button onPress={this.onButtonPress.bind(this)}>Update</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, description, complete } = state.taskForm;
  return { name, description, complete };
};

export default connect(mapStateToProps, { taskUpdate, taskSave, taskDelete })(TaskEdit);
