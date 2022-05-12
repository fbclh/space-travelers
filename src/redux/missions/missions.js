const FETCH_SUCCESS = 'space-travelers/missions/FETCH_SUCCESS';
const missionsURL = 'https://api.spacexdata.com/v3/missions';
const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers/missions/LEAVE_MISSION';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...action.payload];
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return [...newState];
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return [...newState];
    }
    default:
      return state;
  }
};

export default reducer;

export const fetchDataSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const fetchMissions = () => async (dispatch) => {
  const response = await fetch(missionsURL);
  const data = await response.json();
  const info = Object.entries(data).map(([key, value]) => ({
    id: key,
    mission_name: value.mission_name,
    description: value.description,
    reserved: false,
    wikipedia: value.wikipedia,
  }));
  dispatch(fetchDataSuccess(info));
};
