import { OptionTypes } from './types';

const options: OptionTypes = {
  amLabel: 'AM',
  animation: true,
  appendModalSelector: '',
  backdrop: true,
  cancelLabel: 'CANCEL',
  editable: false,
  enableScrollbar: false,
  enableSwitchIcon: false,
  mobileTimeLabel: 'Enter Time',
  focusInputAfterCloseModal: false,
  hourMobileLabel: 'Hour',
  iconTemplate: '<i class="material-icons timepicker-ui-keyboard-icon">keyboard</i>',
  iconTemplateMobile: '<i class="material-icons timepicker-ui-keyboard-icon">schedule</i>',
  incrementHours: 1,
  incrementMinutes: 1,
  minuteMobileLabel: 'Minute',
  mobile: false,
  okLabel: 'OK',
  pmLabel: 'PM',
  timeLabel: 'Select Time',
  switchToMinutesAfterSelectHour: false,
  theme: 'basic',
  clockType: '12h',
  allowNull: false,
  disabledTime: undefined,
  currentTime: undefined,
  focusTrap: true,
  delayHandler: 300,
};

export { options };
