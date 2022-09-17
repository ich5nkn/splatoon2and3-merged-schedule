export const getStartDate = (dateString: string) => {
    const date = new Date(dateString);
    const jst = new Date(date.getTime() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
    const month = jst.getMonth() + 1;
    const day = jst.getDate();
    const hour = `${jst.getHours()}`.padStart(2, '0');
    return `${month}/${day} ${hour}:00`
};

export const ruleMapping = (rule?: string) => {
    if (!rule) return ''
    if (rule === 'ガチホコバトル') return 'hoko.png';
    if (rule === 'ガチエリア') return 'area.png';
    if (rule === 'ガチヤグラ') return 'yagura.png';
    if (rule === 'ガチアサリ') return 'asari.png';
    return rule;
};
