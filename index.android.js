/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Navigator,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './boy';

export default class GitHubPopular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'tab_polular',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/*<TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab_polular'}
            selectedTitleStyle={{color:'red'}}
            title="最热"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tab_polular' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab_trending'}
            selectedTitleStyle={{color:'yellow'}}
            title="趋势"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tab_trending' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab_favorite'}
            selectedTitleStyle={{color:'red'}}
            title="收藏"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_favorite.png')} />}
            badgeText="10"
            onPress={() => this.setState({ selectedTab: 'tab_favorite' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab_my'}
            selectedTitleStyle={{color:'yellow'}}
            title="我的"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_my.png')} />}
            onPress={() => this.setState({ selectedTab: 'tab_my' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>*/}
        <Navigator
          initialRoute={{
            component:Boy
          }}
          renderScene={(route,navigator)=>{
            let Component=route.component;
            return <Component navigator={navigator} {...route.params}/>
          }}
        ></Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1: {
    flex: 1,
    backgroundColor: 'red',
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  image: {
    height: 22,
    width: 22
  }
});

AppRegistry.registerComponent('GitHubPopular', () => GitHubPopular);