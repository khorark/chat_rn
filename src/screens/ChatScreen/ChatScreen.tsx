import React, { PureComponent } from 'react'
import { View, StyleSheet, BackHandler, ScrollView } from 'react-native'
import { colors } from '../../constants/colors'
import { getRemValue } from '../../helpers/stylesHelper'
import InputMessage from '../../components/InputMessage/InputMessage'

export default class ChatScreen extends PureComponent {
    public componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    public componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    public render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollView contentContainerStyle={styles.messagesContainer} />
                <InputMessage />
            </View>
        )
    }

    private handleBackButtonClick = () => {
        BackHandler.exitApp()
        return false
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: colors.galleryapprox,
        paddingHorizontal: 16,
        paddingVertical: 17,
    },
    messagesContainer: {
        flexGrow: 1,
    },
})
