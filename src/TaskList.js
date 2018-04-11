import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import _ from 'lodash';
import { tasksFetch } from './actions';
import ListItem from './ListItem';

class TaskList extends Component {
  componentDidMount() {
    this.props.tasksFetch();
  }

  render() {
    return <FlatList data={this.props.tasks} renderItem={t => <ListItem task={t} />} />;
  }
}

const mapStateToProps = state => {
  const tasks = _.map(state.tasks, (task, uid) => ({
    ...task,
    key: uid
  }));
  return { tasks };
};

export default connect(mapStateToProps, { tasksFetch })(TaskList);
