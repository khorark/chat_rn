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
        marginLeft: getRemValue(-55),
    },
    logoImage: {
        width: getRemValue(320),
        height: getRemValue(120),
    },
    eyeImage: {
        width: getRemValue(18),
        height: getRemValue(14),
    },
    inputContainer: {
        width: getRemValue(315),
        height: getRemValue(44),
        borderRadius: getRemValue(22),
        backgroundColor: colors.white,
        borderWidth: getRemValue(1),
        borderColor: colors.alto,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: getRemValue(10),
        paddingVertical: getRemValue(1),
    },
    input: {
        flex: 1,
    },
    eyeContainer: {
        borderLeftWidth: 1,
        borderLeftColor: colors.alto,
        paddingLeft: 10,
    },
})
