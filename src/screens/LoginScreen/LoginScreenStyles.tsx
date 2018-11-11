import EStyleSheet from 'react-native-extended-stylesheet'
import { getRemValue } from '../../helpers/stylesHelper'

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
    logoImage: {
        width: getRemValue(235),
        height: getRemValue(69),
    },
    centerContainer: {
        alignItems: 'center',
        marginTop: getRemValue(72),
    },
})
