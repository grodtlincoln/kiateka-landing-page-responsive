import {create} from "zustand";
import {persist} from "zustand/middleware";

type Theme = "light" | "dark";
interface ThemeStore {
    theme: Theme;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
        theme: 
           typeof window !== "undefined" && 
            window.matchMedia("(prefers-color-scheme:dark)").matches
             ? "dark" 
             : "light",
             
             toggleTheme: () => {
            const currentTheme =get().theme;
            const newTheme: Theme = currentTheme === "light" ? "dark" : "light";

          // ensure document is defined before accessing it
            if(typeof document !== "undefined") {
                document.documentElement.classList.remove("light", "dark");
                document.documentElement.classList.add(newTheme);
            }
            
        set({theme:newTheme});

        },
    }), 

    {
        name: "theme", 
        onRehydrateStorage: () => (state) => {

        //this makes ssure the dark/light class is correctly applied on reload
        if (typeof document !== "undefined") {
            document.documentElement.classList.remove("light", "dark");
        if (state?.theme ==="dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.add("light");
        }
    }
  },
}
)
);