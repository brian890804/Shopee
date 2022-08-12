import create from "zustand";
import { persist } from "zustand/middleware"
const useStore = create(persist(
    (set) => ({
        token: "",
        member: {},
        setToken: (jwt) => set(() => ({ token: jwt })),
        setMember: (member) => set(() => ({ member })),
    }),
    {
        name: "MemberStorage", // unique name
    }
))
export default useStore;