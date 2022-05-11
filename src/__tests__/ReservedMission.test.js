import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import ReservedMission from '../components/Missions/ReservedMission';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ReservedMission />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
