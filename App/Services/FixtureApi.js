// @flow
import boiseData from '../Fixtures/boise.json';
import torontoData from '../Fixtures/toronto.json';

export default {
  // Functions return fixtures
  getCity: (city: string) => (
    // This fixture only supports Boise or else returns toronto
    {
      ok: true,
      data: city.toLowerCase() === 'boise' ? boiseData : torontoData,
    }
  ),
};
