import AsyncStorage from '@react-native-async-storage/async-storage'

const SEARCH_HISTORY_KEY = '@search_history'

const historyService = {
  retrive: async (): Promise<string[]> => {
    const value = await AsyncStorage.getItem(SEARCH_HISTORY_KEY)
    return JSON.parse(value ?? '[]')
  },

  save: async (search: string): Promise<void> => {
    const previousValue = await historyService.retrive()
    const value = JSON.stringify([search, ...previousValue])
    await AsyncStorage.setItem(SEARCH_HISTORY_KEY, value)
  },
}
export default historyService
