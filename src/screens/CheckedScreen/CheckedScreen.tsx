import React from 'react'
import { Navigation, ModalDismissedEvent } from 'react-native-navigation'

import Accept from './components/Accept'
import Reject from './components/Reject'

interface ICheckedScreen extends ModalDismissedEvent {
    checked: boolean
    acceptCallback?: () => void
}

const CheckedScreen = ({ checked, acceptCallback, componentId }: ICheckedScreen) => {
    if (checked) {
        setTimeout(() => {
            acceptCallback && acceptCallback()
            Navigation.dismissModal(componentId)
        }, 2000)
        return <Accept />
    } else {
        setTimeout(() => Navigation.dismissModal(componentId), 2000)
        return <Reject />
    }
}

export default CheckedScreen
