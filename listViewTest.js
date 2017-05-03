import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ListView
} from 'react-native';
import NavigationBar from './NavigationBar';
var data = {
	"result": [{
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}, {
		"email": "s.hernandez@williams.net",
		"fullName": "张三"
	}],
	"statusCode": 0
};
export default class ListViewTest extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows(data.result),
		};
	}
	renderRow(item) {
		return <View style={styles.row}>
			<Text style={styles.tips}>{item.fullName}</Text>
			<Text style={styles.tips}>{item.email}</Text>
		</View>
	}
	renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
		return <View style={styles.line}></View>
	}
	renderFooter() {
		return <View>
			<Text>已经到底部了</Text>
		</View>
	}
	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					title={'ListViewTest'}
				/>
				<ListView 
					dataSource={this.state.dataSource}
					renderRow={(item)=>this.renderRow(item)}
					renderSeparator={(sectionID,rowID,adjacentRowHighlighted)=>this.renderSeparator(sectionID,rowID,adjacentRowHighlighted)}
					renderFooter={()=>this.renderFooter()}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	tips: {
		fontSize: 20,
	},
	row: {
		height: 50
	},
	line: {
		height: 1,
		backgroundColor: 'black'
	}
})