/**
 * Created by Weil on 2017/5/30.
 */

export let formatDate = (timestamp) => {
  let date = new Date(timestamp);
  return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
};
