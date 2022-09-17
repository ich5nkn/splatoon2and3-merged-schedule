export const getStartDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = `${date.getHours()}`.padStart(2, '0');
    return `${month}/${day} ${hour}:00`
};

export const ruleMapping = (rule?: string) => {
    if (!rule) return ''
    if (rule === 'ガチホコバトル') return 'ホコ';
    if (rule === 'ガチエリア') return 'エリア';
    if (rule === 'ガチヤグラ') return 'ヤグラ';
    if (rule === 'ガチアサリ') return 'アサリ';
    return rule;
};
