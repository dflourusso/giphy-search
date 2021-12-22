import AsyncStorage from '@react-native-async-storage/async-storage'

const SEARCH_HISTORY_KEY = '@search_history'

const historyService = {
  clean: async (): Promise<void> => {
    await AsyncStorage.removeItem(SEARCH_HISTORY_KEY)
  },

  retrive: async (): Promise<string[]> => {
    const value = await AsyncStorage.getItem(SEARCH_HISTORY_KEY)
    return JSON.parse(value ?? '[]')
  },

  save: async (searchValue: string): Promise<void> => {
    const search = `${searchValue}`.trim()
    if (!search) return
    const previousValue = await historyService.retrive()
    const valueWithUniqueElements = [...new Set([search, ...previousValue])]
    const value = JSON.stringify(valueWithUniqueElements)
    await AsyncStorage.setItem(SEARCH_HISTORY_KEY, value)
  },
}
export default historyService
