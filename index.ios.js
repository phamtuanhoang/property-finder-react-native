/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
var React = require('react');
var ReactNative = require('react-native');

var searchPage  = require('./src/SearchPage')

var styles = ReactNative.StyleSheet.create({
  container: {
    flex:1
  }
});

//root component
class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}


ReactNative.AppRegistry.registerComponent('PropertyFinder', function() {
  return PropertyFinderApp
});
