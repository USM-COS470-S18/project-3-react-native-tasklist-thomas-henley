import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate } from './actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskCreate extends Component {
  onButtonPress() {
    const { name, description, complete } = this.props;
    this.props.taskCreate({ name, description, complete });
  }

  render() {
    return (
      <Card>
        <TaskForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, description, complete } = state.taskForm;
  return { name, description, complete };
};

export default connect(mapStateToProps, { taskUpdate, taskCreate })(TaskCreate);
