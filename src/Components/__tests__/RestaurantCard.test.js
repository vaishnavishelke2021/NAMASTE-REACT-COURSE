import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/ResCardMock.json"
import "@testing-library/jest-dom";


test('should render restaurantCard component with props data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Easy Bites");
  expect(name).toBeInTheDocument();
})

