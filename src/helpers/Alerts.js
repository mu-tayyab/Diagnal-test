import { Alert } from 'react-native';

const errorMessages = {
  noData: {
    title: null,
    message: 'Data not available.',
  },
  serverError: {
    title: null,
    message: 'There was an error while processing your request, please try again later.',
  },
  generalError: {
    title: 'Something went wrong',
    message: 'Something went wrong, please try again.',
  },
  networkError: {
    title: 'No internet connection',
    message: 'Unable to find an active internet connection, please ensure internet connectivity.',
  },
};

export const alertDefault = ({ title, message }, cancelable = true) => {
  setTimeout(() => {
    Alert.alert(title, message, [], { cancelable });
  }, 100);
};

export const alertAxiosError = (err) => {
  if (err.response) {
    if (err.response.status >= 400 && err.response.status <= 499) {
      alertDefault(errorMessages.noData);
    } else if (err.response.status >= 500 && err.response.status <= 599) {
      alertDefault(errorMessages.serverError);
    } else {
      alertDefault(errorMessages.generalError);
    }
  } else if (err.request) {
    alertDefault(errorMessages.networkError);
  } else {
    alertDefault(errorMessages.generalError);
  }
};
