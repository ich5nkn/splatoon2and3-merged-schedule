export const getStartDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = `${date.getHours()}`.padStart(2, '0');
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
