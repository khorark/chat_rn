import React, { memo } from 'react'
import { View, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Avatar from '../Avatar/Avatar'
import TouchableComponent from '../TouchableComponent/TouchableComponent'
import { colors } from '../../constants/colors'
import { getRemValue } from '../../helpers/stylesHelper'
import TrashIcon from '../../assets/images/TrashIcon'

interface IMessage {
    id: string
    text: string
    onCallback: (id: string) => void
}

const Message = ({ id, text, onCallback }: IMessage) => (
    <View style={styles.mainContainer}>
        <Avatar size={44} />
        <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{text}</Text>
            <View style={styles.deleteContainer}>
                <TouchableComponent onPress={onCallback.bind(null, id)}>
                    <TrashIcon width={16} height={24} fill={colors.tealish} />
                </TouchableComponent>
            </View>
        </View>
    </View>
)

const styles = EStyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
    },
    messageContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        borderRadius: getRemValue(22),
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.alto,
        paddingHorizontal: getRemValue(10),
        paddingVertical: getRemValue(1),
        marginLeft: 16,
    },
    messageText: {
        flex: 1,
        paddingVertical: getRemValue(13),
        paddingRight: getRemValue(25),
    },
    deleteContainer: {
        flexShrink: 0,
        borderColor: colors.alto,
        borderLeftWidth: 1,
        paddingLeft: getRemValue(9),
        paddingBottom: getRemValue(5),
        marginVertical: getRemValue(5),
    },
})

export default memo(Message)
