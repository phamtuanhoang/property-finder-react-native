'use strict';

import React, {component} from 'react'
import {
   StyleSheet,
   Text,
   TextInput,
   View,
   TouchableHighlight,
   ActivityIndicator,
   Image
} from 'react-native';

var styles = StyleSheet.create({
  description:{
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container:{
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});
class SearchPage extends React.Component  {
  render() {
    return
          "Search for houses to buy!"
    ;
  }
}
module.exports = SearchPage;
