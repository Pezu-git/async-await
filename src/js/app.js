/* eslint-disable linebreak-style */
import GameSavingLoader from './GameSavingLoader.js';

export default async function prom() {
  try {
    const loadAwait = await GameSavingLoader.load();
    const parseAwait = await JSON.parse(loadAwait);
    return parseAwait;
  } catch (error) {
    // eslint-disable-next-line no-undef
    throw new Error(error);
  }
  // return GameSavingLoader.load().then(((result) => JSON.parse(result)
}
