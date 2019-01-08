import EStyleSheet from 'react-native-extended-stylesheet'
import { getRemValue } from '../../helpers/stylesHelper'

export default EStyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    mainContainer: {
        flex: 1,
    },
    imageContainer: {
        marginTop: getRemValue(128),
        marginLeft: getRemValue(-94),
    },
})
