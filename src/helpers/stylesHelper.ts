import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const rem = width > 340 ? 18 : 16;

/**
 * Получение rem из px
 * @param px
 */
export const getRemValue = (px: number) => `${(px / rem)}rem`
