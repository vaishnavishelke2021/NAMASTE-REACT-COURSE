import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load Header with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"});
  expect(loginButton).toBeInTheDocument();
});


test("should load Header with cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/(0)/);   // /../ this is regex , using this we don't need to write complete string
  expect(cartItems).toBeInTheDocument();
});


test("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"});
  fireEvent.click(loginButton);                                          //fireEvent to fire an event
  const logoutButton = screen.getByRole("button", {name: "Logout"});
  expect(logoutButton).toBeInTheDocument();
});