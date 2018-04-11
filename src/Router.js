import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import TaskList from './TaskList';
import TaskCreate from './TaskCreate';
import TaskEdit from './TaskEdit';

const RouterComponent = () => {
  return (
    <Router>
      <View style={{ height: 20 }}>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" />
          </Scene>
          <Scene key="main">
            <Scene
              rightTitle="Add"
              onRight={() => {
                Actions.taskCreate();
              }}
              key="taskList"
              component={TaskList}
              title="Task List"
              initial
            />
            <Scene key="taskCreate" component={TaskCreate} title="New Task" />
            <Scene key="taskEdit" component={TaskEdit} title="Edit Task" />
          </Scene>
        </Scene>
      </View>
    </Router>
  );
};

export default RouterComponent;
