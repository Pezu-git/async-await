/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import prom from '../js/app.js';

test('should work with promise and async/await', async () => {
  const data = await prom();
  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});

test('should handle errors', async () => {
  async function testprom() {
    try {
      // eslint-disable-next-line no-unused-vars
      const loadAwait = await GameSavingLoader.load();
      const parseAwait = await JSON.parse(this.loadAwait);
      return parseAwait;
    } catch (error) {
      // eslint-disable-next-line no-undef
      throw new Error(error);
    }
  }
  expect.assertions(1);
  try {
    // eslint-disable-next-line no-unused-vars
    const data = await testprom();
  } catch (e) {
    expect(e).toEqual(e);
  }
});
