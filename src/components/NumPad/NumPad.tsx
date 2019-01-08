import React, { memo } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import DeleteIcon from '../../assets/images/DeleteIcon'

interface INumPad {
    handlePressKey: (value: string) => void
}

const NumPad = ({ handlePressKey }: INumPad) => (
    <View style={styles.containerNumPad}>
        {Array.from(Array(9).keys()).map((key: number) => (
            <TouchableOpacity
                key={key}
                style={styles.numberContainer}
                onPress={handlePressKey.bind(null, (key + 1).toString())}
            >
                <Text style={styles.numberText}>{key + 1}</Text>
            </TouchableOpacity>
        ))}
        <View style={styles.bottomNumPad}>
            <TouchableOpacity style={styles.numberContainer} onPress={handlePressKey.bind(null, '0')}>
                <Text style={styles.numberText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteContainer} onPress={handlePressKey.bind(null, 'del')}>
                <DeleteIcon width={45} height={33} fill={'#fff'} />
            </TouchableOpacity>
        </View>
    </View>
)

const styles = EStyleSheet.create({
    containerNumPad: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    bottomNumPad: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        flexGrow: 1,
    },
    numberContainer: {
        width: 77,
        height: 77,
        borderRadius: 39,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    numberText: {
        fontSize: 36.5,
        fontWeight: '100',
        color: '#fefefe',
    },
    deleteContainer: {
        position: 'absolute',
        top: 35,
        right: 65,
        // marginLeft: 130,
    },
})

export default memo(NumPad)
