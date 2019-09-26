import withAuthRoute from "./WithAuthRoute";
import { getToken } from "../../utils/localStore";

const PublicRoute = withAuthRoute(() => !getToken(), "/");
export default PublicRoute;
