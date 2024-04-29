import { createContext } from "react";

const UserContext = createContext(
    {
        loggedInUser : null
    }
)

export default UserContext;