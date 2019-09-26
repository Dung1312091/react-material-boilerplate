import withAuthRoute from "./WithAuthRoute";
import { getToken } from "../../utils/localStore";
const PrivateRoute = withAuthRoute(() => getToken(), "/login");
export default PrivateRoute;
