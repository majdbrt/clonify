import { create } from 'zustand'

const useStore = create((set) => ({
  windowYScroll: 0,
  setWindowYScroll: (y) => set(() => ({ windowYScroll: y })),
  overViewColor: [30, 30, 30],
  setOverViewColor: (color) => set(() => ({
    overViewColor: color
  })),
  profileLoading: true,
  setProfileLoading: () => set(() => ({ profileLoading: false })),
  albumsLoading: true,
  setAlbumsLoading: () => set(() => ({ albumsLoading: false })),
  featuredPlaylistsLoading: true,
  setFeaturedPlaylistsLoading: () => set(() => ({ featuredPlaylistsLoading: false })),
  topArtistsLoading: true,
  setTopArtistsLoading: () => set(() => ({ topArtistsLoading: false })),
  playlistsLoading: true,
  setPlaylistsLoading: () => set(() => ({ playlistsLoading: false })),
  headerProfileElement: null,
  setHeaderProfileElement: (elem) => set(() => ({ headerProfileElement: elem })),
  queue:[],
  setQueue: (trackArr) => set(() => ({ queue: trackArr }))

}))

export default useStore;