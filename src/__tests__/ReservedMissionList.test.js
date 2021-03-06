import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import ReservedMissionList from '../components/Missions/ReservedMissionList';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ReservedMissionList />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
