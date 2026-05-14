// src/store/useBookmarkStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBookmarkStore = create(
  persist(
    (set, get) => ({
      bookmarks: [], // Yahan saari saved jobs rahengi
      
      toggleBookmark: (job) => {
        const { bookmarks } = get();
        // Check kar rahe hain ki job pehle se saved hai ya nahi
        const isExisting = bookmarks.some((b) => b.id === job.id);
        
        if (isExisting) {
          // Agar hai, toh remove kar do
          set({ bookmarks: bookmarks.filter((b) => b.id !== job.id) });
          return false; // Removed
        } else {
          // Agar nahi hai, toh add kar do
          set({ bookmarks: [...bookmarks, job] });
          return true; // Added
        }
      },
      
      // Ye function check karega ki heart/bookmark icon solid blue karna hai ya nahi
      isBookmarked: (jobId) => {
        return get().bookmarks.some((b) => b.id === jobId);
      }
    }),
    {
      name: 'job-bookmarks', // LocalStorage mein is naam se save hoga
    }
  )
);