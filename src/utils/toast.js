// @flow
import toast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { errorMessageType, successMessageType, defaultErrorMessage } from '../constant';

toast.settings({
  timeout: 7000,
  balloon: false,
  position: 'topRight',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

type Message = {
  title: string,
  message: string,
};

type Type = 'warning' | 'success' | 'info' | 'error';
export function displayMessage(type: Type, message: Message) {
  toast[type](message);
}

export function displayErrorMessage(error: Object) {
  const { reason: message = defaultErrorMessage } = error.response.data;
  const messageObj = { title: 'Error', message };
  displayMessage(errorMessageType, messageObj);
}

export function displaySuccessMessage(message: string) {
  const messageObj = { title: 'Success', message };
  displayMessage(successMessageType, messageObj);
}
