import type { GetStaticProps, NextPage } from 'next';
import * as fs from 'fs'
import * as path from 'path'

import styles from '../styles/Home.module.css'
import { Schedule, ScheduleItem, Spl2Response, Spl3Response } from '../types'
import { getStartDate, ruleMapping } from '../utils'
import { ScheduleCard } from '../components/ScheduleItem';

type PageProps = { schedules?: Schedule[] }
type FormattedSchedule = Array<ScheduleItem & {start: string}>

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const timeTable: string[] = [];
  const spl2GachiResponse = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'spl2_gachi.json'), 'utf-8')) as Spl2Response
  const spl2Gachi: FormattedSchedule = spl2GachiResponse.result.map(res => {
    const start = getStartDate(res.start);
    if(!timeTable.some(time => time === start)) timeTable.push(start);
    return {
      start,
      rule: res.rule,
      map1: res.maps[0],
      map2: res.maps[1]
  }});
  const spl2LeagueResponse = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'spl2_league.json'), 'utf-8')) as Spl2Response
  const spl2League: FormattedSchedule = spl2LeagueResponse.result.map(res => {
    const start = getStartDate(res.start);
    if(!timeTable.some(time => time === start)) timeTable.push(start);
    return {
      start,
      rule: res.rule,
      map1: res.maps[0],
      map2: res.maps[1]
  }});
  const spl3ChallengeResponse = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'spl3_challenge.json'), 'utf-8')) as Spl3Response
  const spl3Challenge: FormattedSchedule = spl3ChallengeResponse.results.map(res => {
    const start = getStartDate(res.start_time);
    if(!timeTable.some(time => time === start)) timeTable.push(start);
    return {
      start,
      rule: res.rule.name,
      map1: res.stages[0].name,
      map2: res.stages[1].name
  }});
  const spl3OpenResponse = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'spl3_open.json'), 'utf-8')) as Spl3Response
  const spl3Open: FormattedSchedule = spl3OpenResponse.results.map(res => {
    const start = getStartDate(res.start_time);
    if(!timeTable.some(time => time === start)) timeTable.push(start);
    return {
      start,
      rule: res.rule.name,
      map1: res.stages[0].name,
      map2: res.stages[1].name
  }});

  const schedules: Schedule[] = timeTable.sort().map(time => ({
    start: time,
    spl2Gachi: spl2Gachi.find(({start}) => start === time) ?? null,
    spl2League: spl2League.find(({start}) => start === time) ?? null,
    spl3Challenge: spl3Challenge.find(({start}) => start === time) ?? null,
    spl3Open: spl3Open.find(({start}) => start === time) ?? null,
  }));

  return {
    props: { schedules }
  }
}

const Home: NextPage<PageProps> = ({schedules}) => {

  if(!schedules) return (
    <div>スケジュールを取得できませんでした。</div>
  )

  return (
    <div className={styles.main}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableTitle}>時間帯</th>
            <th className={styles.tableTitle}>スプラ２ ガチマ</th>
            <th className={styles.tableTitle}>スプラ２ リグマ</th>
            <th className={styles.tableTitle}>スプラ３ チャレンジ</th>
            <th className={styles.tableTitle}>スプラ３ オープン</th>
          </tr>
          {schedules.map(schedule => (
            <tr className="schedule" key={schedule.start}>
              <td className={styles.tableTime}>{schedule.start}</td>
              <td className={styles.tableItem}><ScheduleCard item={schedule.spl2Gachi} /></td>
              <td className={styles.tableItem}><ScheduleCard item={schedule.spl2League} /></td>
              <td className={styles.tableItem}><ScheduleCard item={schedule.spl3Challenge} /></td>
              <td className={styles.tableItem}><ScheduleCard item={schedule.spl3Open} /></td>
            </tr>
          ))}
        </thead>
      </table>
      
    </div>
  )
}

export default Home
