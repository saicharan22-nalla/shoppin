import {create} from "zustand";

const useStore = create((set) => ({
  sizes: [40, 44, 46],
  selectedSize: 44,
  setSize: (size) => set({ selectedSize: size }),

  cases: [
    { id: "jet-black", name: "Jet Black" },
    { id: "silver", name: "Silver" },
  ],
  selectedCase: "jet-black",
  setCase: (caseId) => set({ selectedCase: caseId }),

  bands: [
    { id: "sport-loop", name: "Sport Loop" },
    { id: "braided-loop", name: "Braided Solo Loop" },
  ], 
  selectedBand: "sport-loop",
  setBand: (bandId) => set({ selectedBand: bandId }),

  collections: [
    { id: "modern", name: "Modern" },
    { id: "classic", name: "Classic" },
  ],
  selectedCollection: "modern",
  setCollection: (collectionId) => set({ selectedCollection: collectionId }),
}));


export default useStore