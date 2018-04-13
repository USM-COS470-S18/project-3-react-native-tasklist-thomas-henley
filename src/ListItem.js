import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { taskSwitch } from './actions';
import { CardSection, Switcher } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.taskEdit({ task: this.props.task });
  }

  render() {
    const { name, description, complete } = this.props.task.item;
    const { headerStyle, headerTextStyle, layoutStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <View style={layoutStyle}>
              <View style={headerStyle}>
                <Text style={headerTextStyle}>{name}</Text>
                <Text>{description}</Text>
              </View>
              <View>
                <Switcher
                  label="Complete"
                  color="lightblue"
                  value={complete}
                  onValueChange={newValue => {
                    console.log('click');
                    this.props.taskSwitch({
                      name,
                      description,
                      complete: newValue,
                      uid: this.props.task.item.key
                    });
                  }}
                />
              </View>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  const { name, description, complete } = state.listItem;
  return { name, description, complete };
};

const styles = {
  layoutStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 24
  }
};

export default connect(mapStateToProps, { taskSwitch })(ListItem);
