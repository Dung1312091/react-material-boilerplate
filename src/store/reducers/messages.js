import { message } from "antd";
const onClose = () => {
  message.destroy();
};
const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case "SHOW_MESSAGE":
      const { type, content } = action.payload;
      if (type === "success") {
        message[type](content, 1, onClose);
      } else {
        message[type](content, 2.5, onClose);
      }
      return {};
    default:
      return {};
  }
};
export default messageReducer;
