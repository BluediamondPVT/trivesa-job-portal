// src/store/useAuthStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'; // 🔥 Persist middleware import kiya

export const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false, // Default state
      user: null,

      // Login function
      login: (userData) => set({ isAuthenticated: true, user: userData }),

      // Logout function
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    {
      name: 'auth-storage', // 🔥 LocalStorage mein is naam se data save hoga
      storage: createJSONStorage(() => localStorage), // Data ko LocalStorage me daalna hai
    }
  )
);