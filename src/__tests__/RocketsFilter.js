import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsFilter from '../components/Profile/RocketsFilter';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <RocketsFilter />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
