import { create } from 'zustand'

interface NavStore {
  selectedNav: string
  setSelectedNav: (selectedNav: string) => void
}

export const useNavStore = create<NavStore>((set) => ({
  selectedNav: '',
  setSelectedNav: (selectedNav: string) => set({ selectedNav }),
}))
