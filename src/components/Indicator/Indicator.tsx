import React from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { getRemValue } from '../../helpers/stylesHelper'

interface IIndicatorProps {
    length: number
}

const Indicator = ({ length }: IIndicatorProps) => (
    <View style={styles.inputContainer}>
        {Array.from(Array(4).keys()).map((key: number) => (
            <View key={key} style={[styles.circle, length > key ? styles.circleFill : null]}/>
        ))}
    </View>
)

const styles = EStyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: getRemValue(30),
    },
    circle: {
        width: getRemValue(14),
        height: getRemValue(14),
        borderRadius: getRemValue(7),
        borderWidth: 2,
        borderColor: '#fff',
        marginHorizontal: getRemValue(14),
    },
    circleFill: {
        backgroundColor: '#fff',
    },
})

export default Indicator
