import { message as notification } from 'antd';

export const showSuccessNotification = (description) => {
  notification.success(description, 2.5);
};

export const showFailureNotification = (description = 'Something went wrong.') => {
  notification.error(description, 2.5);
};

export const showWarningNotification = (description) => {
  notification.warning(description, 2.5);
};
