import React, { useRef, useEffect } from "react";
import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import configureStore from "./configureStore";
import { setCollection, setAge } from "./actions/collectionActions";
import Container from "./Container";
import Presentation from "./Presentation";
import Dispatch from "./Dispatch";

const App = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { ids, entities } = useSelector((state) => state.collection);

  useEffect(() => {
    dispatch(
      setCollection([
        {
          id: 1,
          name: "John",
          age: 20,
        },
        {
          id: 2,
          name: "Park",
          age: 35,
        },
      ])
    );
    dispatch(setAge(2, 55));

    const { ids, entities } = store.getState().collection;
    const originalPayload = ids.map((id) => entities[id]);
    console.log(originalPayload);
  }, []);

  return (
    <>
      화면 컴포넌트 : <Presentation userName="화면 컴포넌트" />
      <br />
      데이터 컴포넌트 : <Container id={2} />
      <br />
      액션 데이터 컴포넌트 : <Dispatch />
    </>
  );
};

const AppWrapper = () => {
  const storeRef = useRef(
    configureStore({
      loading: false,
    })
  );

  return (
    <Provider store={storeRef.current}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
