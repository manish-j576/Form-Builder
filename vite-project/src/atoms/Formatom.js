import { atom } from "recoil";

export const formAtom = atom({
    key: "formAtom",
    default:[]
})

export const fieldType = atom({
    key:"fieldType",
    default:"text"
})

export const fieldLabel = atom({
    key:"fieldLabel",
    default:""
})