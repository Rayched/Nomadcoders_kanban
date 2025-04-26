import {atom, selector} from "recoil";

export const MinuteAtoms = atom({
    key: "MinuteAtoms",
    default: ""
});

export const HourSelectors = selector({
    key: "HourSelectors",
    get: ({get}) => {
        const MinuteValues = get(MinuteAtoms);
        const Hours = MinuteValues !== "" ? Number(MinuteValues) / 60 : ""
        return Hours;
    },
})