import create from 'zustand'

export const useFilterParamsStore = create((set: any) => ({
  setGenres: (data: any) => set({ genres: data }),
  setLanguages: (data: any) => set({ languages: data }),
  genres: [],
  languages: [],
  rates: [
    { value: 'highestrated', label: 'Highest Rated' },
    { value: 'lowestrated', label: 'Lowest Rated' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'latest', label: 'Latest' },
  ],
}))
