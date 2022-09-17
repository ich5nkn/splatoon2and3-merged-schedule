import { Schedule, ScheduleItem } from "../types";
import styles from "../styles/ScheduleCard.module.css"
import { ruleMapping } from "../utils";

interface ScheduleCardProps {
    schedule: Schedule
}

export const ScheduleCard = ({ schedule }: ScheduleCardProps) => {
    return (
        <div className={styles.main}>
            <div className={styles.time}>{schedule.start}</div>
            <div className={styles.item}>
                <div className={styles.version3}>Splatoon3</div>
                <ScheduleItem item={schedule.spl3Challenge} title="バンカラマッチ（チャレンジ）"/>
                <ScheduleItem item={schedule.spl3Open} title="バンカラマッチ（オープン）"/>
                <div className={styles.version2}>Splatoon2</div>
                <ScheduleItem item={schedule.spl2Gachi} title="ガチマッチ"/>
                <ScheduleItem item={schedule.spl2League} title="リーグマッチ"/>
            </div>
        </div>
    );
}

interface ScheduleItemProps {
    item: ScheduleItem | null
    title: string
}

const ScheduleItem = ({ item, title }: ScheduleItemProps) => {
    if (!item) return (
        <div className={styles.itemMain}>-</div>
    );

    return (
        <div className={styles.itemMain}>
            <div className={styles.itemTitle}>{title}</div>
            <div className={styles.rule}>
                <img className={styles.ruleIcon} src={ruleMapping(item.rule)}/>
                <div className={styles.ruleName}>{item.rule}</div>
            </div>
            <div className={styles.map}>{item.map1}</div>
            <div className={styles.map}>{item.map2}</div>
        </div>
    )
}