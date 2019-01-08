import EStyleSheet from 'react-native-extended-stylesheet'
import { getRemValue } from '../../helpers/stylesHelper'
import { colors } from '../../constants/colors'

export default EStyleSheet.create({
    mainContainer: {
        flexGrow: 1,
    },
    lineGDContainer: {
        flex: 1,
    },
    imageContainer: {
        marginTop: getRemValue(36),
        marginLeft: getRemValue(30),
    },
    centerContainer: {
        alignItems: 'center',
        marginTop: getRemValue(72),
    },
})
