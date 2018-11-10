import EStyleSheet from 'react-native-extended-stylesheet'
import { getRemValue } from '../../helpers/stylesHelper';
import { colors } from '../../constants/colors';

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
    logoImage: {
        width: getRemValue(414),
        height: getRemValue(120),
    },
    inputContainer: {
        width: getRemValue(315),
        height: getRemValue(44),
        borderRadius: getRemValue(22),
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.alto,
        flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: getRemValue(10),
        paddingVertical: getRemValue(1),
        marginTop: getRemValue(94),
    },
    input: {
        flex: 1,
    },
    delimeter: {
        marginVertical: getRemValue(5),
        backgroundColor: colors.alto,
        width: getRemValue(1),
        marginHorizontal: 10,
    },
    eyeContainer: {
        alignSelf: 'center',
    },
    eyeImage: {
        width: getRemValue(18),
        height: getRemValue(14),
    },
})
