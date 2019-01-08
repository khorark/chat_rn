import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../../../constants/colors'
import RejectIcon from '../../../assets/images/RejectIcon'

const Reject = ({}) => (
    <LinearGradient colors={[colors.tealish, colors.purplyPink]} style={styles.mainContainer}>
        <RejectIcon width={182} height={182} />
    </LinearGradient>
)

const styles = EStyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Reject
