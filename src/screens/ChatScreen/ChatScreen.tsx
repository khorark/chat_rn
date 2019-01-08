import React, { PureComponent } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'

export default class ChatScreen extends PureComponent {
    public componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    public componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    public render() {
        return <View style={styles.mainContainer} />
    }

    private handleBackButtonClick = () => true
}

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: 'green',
    },
})
