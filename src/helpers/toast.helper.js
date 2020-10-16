import * as _ from "lodash";
import { notification } from "antd";

export function toastError(error, duration = 5) {
  let message = "Network error";
  if (typeof error === "string") {
    message = error;
  } else if (error.response) {
    if (!(error.response.status === 401)) {
      message = _.get(error.response, "data.message") || error.message;
    }
  } else if (error.request) {
    message = "Request error";
  } else {
    message = error.message;
  }

  return notification.error({
    message: message,
    duration,
  });
}

export function toastSuccess(success, duration = 5) {
  let message = "";
  if (typeof success === "string") {
    message = success;
  } else if (success.message) {
    message = success.message;
  }

  return notification.success({
    message: message,
    duration,
  });
}
