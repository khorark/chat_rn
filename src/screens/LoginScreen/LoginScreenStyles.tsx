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
    logoImage: {
        width: getRemValue(235),
        height: getRemValue(69),
    },
    centerContainer: {
        alignItems: 'center',
        marginTop: getRemValue(72),
    },

    deleteImage: {
        width: getRemValue(45),
        height: getRemValue(33),
        // color: colors.white,
    },
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
    deleteContainer: {
        position: 'absolute',
        top: 35,
        right: 65,
        // marginLeft: 130,
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
})
