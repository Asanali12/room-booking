export const towerOptions = [
    { value: "А", label: "А" },
    { value: "Б", label: "Б" },
];

export const floorOptions = [...Array(25).keys()].map((value) => { return { value: String(value+3), label: String(value+3) }})

export const roomNumberOptions = [...Array(10).keys()].map((value) => { return { value: String(value+1), label: String(value+1) }})