export const getSchmoe = () => {
  return fetch('https://joeschmoe.ioapi/v1/random')
    .then(res => res.json());
};
