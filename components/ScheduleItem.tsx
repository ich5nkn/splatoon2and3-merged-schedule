import { ScheduleItem } from "../types";

interface OwnProps {
    item: ScheduleItem | null
}

export const ScheduleCard = ({ item }: OwnProps) => {
    if (!item) return (
        <div className="noData">
            -
        </div>
    )
    return (
        <div className="main">
            <div className="rule">{item.rule}</div>
            <div className="map">{item.map1}</div>
            <div className="map">{item.map2}</div>
        </div>
    );
}