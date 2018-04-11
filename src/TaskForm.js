import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { taskUpdate } from './actions';
import { CardSection, Input, Switcher } from './common';

class TaskForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Write task name here"
            value={this.props.name}
            onChangeText={value => this.props.taskUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Notes"
            placeholder="Details about the task."
            value={this.props.description}
            onChangeText={value => this.props.taskUpdate({ prop: 'description', value })}
          />
        </CardSection>
        <CardSection>
          <Switcher
            label="Complete"
            color="lightblue"
            value={this.props.complete}
            onValueChange={newValue => this.props.taskUpdate({ prop: 'complete', value: newValue })}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, description, complete } = state.taskForm;
  return { name, description, complete };
};

export default connect(mapStateToProps, { taskUpdate })(TaskForm);
