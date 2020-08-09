import { SET_COLLECTION, SET_AGE } from "../actions/collectionActions";

// 이런 형태의 데이터를 그래프 db라고 한단다.
const initState = {
  ids: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COLLECTION: {
      const ids = payload.map((entity) => entity["id"]);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity["id"]]: entity,
        }),
        {}
      );

      return {
        ...state,
        ids,
        entities,
      };
    }
    case SET_AGE: {
      const { id, age } = payload;

      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: {
            ...state.entities[id],
            age,
          },
        },
      };
    }

    default:
      return state;
  }
};
