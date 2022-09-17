import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.css'

import * as fs from 'fs'
import * as path from 'path'
import { Schedule, ScheduleItem, Spl2Response, Spl3Response } from '../types'
import { getStartDate } from '../utils'

type PageProps = { schedule?: Schedule[] }
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
  console.log(spl2Gachi)
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

  const schedule: Schedule[] = timeTable.sort().map(time => ({
    start: time,
    spl2Gachi: spl2Gachi.find(({start}) => start === time) || null,
    spl2League: spl2League.find(({start}) => start === time) || null,
    spl3Challenge: spl3Challenge.find(({start}) => start === time) || null,
    spl3Open: spl3Open.find(({start}) => start === time) || null,
  }));

  // ページコンポーネントに渡す props オブジェクトを設定する
  return {
    props: { schedule }
  }
}

const Home: NextPage<PageProps> = ({schedule}) => {
  console.log(schedule);
  return (
    <div>this is page.</div>
  )
}

export default Home
