export type Spl2Response = { 
    result: {
        rule: string,
        maps: string[],
        start: string
    }[]
};

export type Spl3Response = {
    results: {
        rule: {
            key: string,
            name: string
        },
        stages: {
            id: number,
            name: string
        }[],
        start_time: string
    }[]
};

export type ScheduleItem = {
    rule: string,
    map1: string,
    map2: string
};

export type Schedule = {
    start: string,
    spl2Gachi: ScheduleItem | null,
    spl2League?: ScheduleItem | null,
    spl3Challenge?: ScheduleItem | null,
    spl3Open?: ScheduleItem | null
};
