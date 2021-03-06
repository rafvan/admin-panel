//These types of components have functionalities
//So a mock store is used for testing async redux actions and middleware
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

import Navbar from "../../components/layout/Navbar";

describe("<Navbar/>", () => {
  it("renders without crashing", () => {
    //Provider makes mock store available to the nested component
    const component = shallow(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    //This function checks if the snapshot matches the rendered component
    expect(component).toMatchSnapshot();
  });
});
