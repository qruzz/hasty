import React, { Component } from 'react'
import {
   View,
   StyleSheet
} from 'react-native'

export default class PlacesListViewItem extends Component {
    render() {
        return (
            <View style={styles.container}>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 96,
        borderWidth: 1,
        borderRadius: 12,
        overflow: 'hidden',
        marginLeft: 15,
        marginRight: 15
    }
})
