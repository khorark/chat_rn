import { AsyncStorage } from 'react-native'

/**
 * Функция для получения данных из хранилища
 * @param valueName название переменной
 */
export const getValueFromStorage = async (valueName: string) => {
    return await AsyncStorage.getItem(valueName)
}

/**
 * Функция для сохранения данных в хранилище
 * @param valueName название переменной
 * @param value значение переменной
 */
export const setValueToStorage = async (valueName: string, value: string ) => {
    return await AsyncStorage.setItem(valueName, value)
}

/**
 * Проверка, есть ли данные в хранилище
 */
export const checkDataStorage = async (valueName: string) => !!await getValueFromStorage(valueName)

