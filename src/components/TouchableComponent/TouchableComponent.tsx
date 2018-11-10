import React, { memo, ReactNode } from 'react'
import { TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native'
import { isIOS } from '../../constants/platform'

interface ITouchableComponent {
    style?: object
    disabled?: boolean
    onPress?: () => void
    children?: ReactNode
}

const TouchableComponent = ({ children, onPress, style, disabled = false }: ITouchableComponent) =>
    isIOS ? (
        <TouchableHighlight onPress={onPress} style={style} disabled={disabled}>
            {children}
        </TouchableHighlight>
    ) : (
        <TouchableNativeFeedback
            onPress={onPress}
            disabled={disabled}
            background={TouchableNativeFeedback.SelectableBackground()}
        >
            <View style={style}>{children}</View>
        </TouchableNativeFeedback>
    )

export default TouchableComponent
