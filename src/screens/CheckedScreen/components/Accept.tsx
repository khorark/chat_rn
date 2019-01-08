import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../../../constants/colors'
import SuccessIcon from '../../../assets/images/SuccessIcon'

const Accept = ({}) => (
    <LinearGradient colors={[colors.tealish, colors.robinSEggBlue]} style={styles.mainContainer}>
        <SuccessIcon width={181} height={181} />
    </LinearGradient>
)

const styles = EStyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Accept
