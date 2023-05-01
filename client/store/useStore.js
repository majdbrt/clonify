import { create } from 'zustand'

const useStore = create((set) => ({
  windowYScroll: 0,
  setWindowYScroll: (y) => set(() => ({ windowYScroll: y })),
  overViewColor: [30,30,30],
  setOverViewColor: (color) => set(()=>({
    overViewColor: color
  }))
}))

export default useStore;