import React, { Component } from 'react'
import {
   View,
   StyleSheet
} from 'react-native'

import StatusbarBackground from './StatusbarBackground.js'

export default class ViewContainer extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
               <StatusbarBackground />

               {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    }
})
