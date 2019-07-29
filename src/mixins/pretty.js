export default {
  methods: {
    niceTime(timestamp) {
      if (!timestamp) return '';
      let utc = (new Date(timestamp)).toISOString();
      if (!utc) return '';
      let offsetHours = (new Date(utc)).getTimezoneOffset() / 60;
      return (parseInt(utc.split('T')[1].split(':')[0]) - offsetHours) + ':' + utc.split('T')[1].split(':')[1];
    },
    niceDate(timestamp) {
      if (!timestamp) return '';
      let date = (new Date(timestamp)).toISOString().split('T')[0];
      let dateNow = (new Date()).toISOString().split('T')[0];
      if (date === dateNow) return 'Сегодня,';

      let d1 = date.split('-');
      let d2 = dateNow.split('-');

      if (d1[0] === d2[0] && d1[1] === d2[1]) {
        if (Number(d2[2]) - Number(d1[2]) === 1) {
          return 'Вчера,';
        }
        if (Number(d2[2]) - Number(d1[2]) === 2) {
          return 'Позавчера,';
        }
      }
      return `${date.split('-')[2]}.${date.split('-')[1]}.${date.split('-')[0]}`
    }
  }

}
