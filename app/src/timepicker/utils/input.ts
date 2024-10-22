/* eslint-disable no-else-return */
import { OptionTypes } from './types';

export const getInputValue = (
  el: HTMLInputElement,
  clockType?: string,
  currentTime?: OptionTypes['currentTime'],
  updateOptions?: boolean,
) => {
  if (!el) {
    return {
      hour: '12',
      minutes: '00',
      type: clockType === '24h' ? undefined : 'PM',
    };
  }

  const { value } = el;

  if (!currentTime) {
    return {
      hour: '',
      minutes: '',
      type: clockType === '24h' ? undefined : 'PM',
    };
    /*if (value === '' || !value) {
      return {
        hour: '12',
        minutes: '00',
        type: clockType === '24h' ? undefined : 'PM',
      };
    }*/
  } else if (typeof currentTime === 'boolean' && currentTime) {
    const [hour, splitMinutes] = new Date().toLocaleTimeString().split(':');

    if (/[a-z]/i.test(splitMinutes) && clockType === '12h') {
      const [minutes, type] = splitMinutes.split(' ');

      return {
        hour: Number(hour) <= 9 ? `0${Number(hour)}` : hour,
        minutes,
        type,
      };
    }

    if (clockType === '12h') {
      const [h, r] = new Date(`1970-01-01T${hour}:${splitMinutes}Z`)
        .toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour12: true,
          hour: 'numeric',
          minute: 'numeric',
        })
        .split(':');

      const [nm, t] = r.split(' ');

      return {
        hour: Number(h) <= 9 ? `0${Number(h)}` : h,
        minutes: nm,
        type: t,
      };
    }

    return {
      hour: Number(hour) <= 9 ? `0${Number(hour)}` : hour,
      minutes: splitMinutes,
      type: undefined,
    };
  } else {
    const { time, locales, preventClockType } = currentTime;
    let cTime = time;

    if (!time) {
      cTime = new Date();
    }

    if (preventClockType && updateOptions) {
      const [preventHour, splitedRest] = new Date(cTime as Date).toLocaleTimeString().split(':');

      if (/[a-z]/i.test(splitedRest)) {
        const [splitedMinutes, restType] = splitedRest.split(' ');
        return {
          hour: preventHour,
          minutes: splitedMinutes,
          type: restType,
        };
      }

      return {
        hour: Number(preventHour) <= 9 ? `0${Number(preventHour)}` : preventHour,
        minutes: splitedRest,
        type: undefined,
      };
    }

    const [hour, splitMinutes] = new Date(cTime as Date)
      .toLocaleTimeString(locales, {
        timeStyle: 'short',
      })
      .split(':');

    if (/[a-z]/i.test(splitMinutes) && clockType === '12h') {
      const [minutes, type] = splitMinutes.split(' ');

      return {
        hour: Number(hour) <= 9 ? `0${Number(hour)}` : hour,
        minutes,
        type,
      };
    }

    if (clockType === '12h') {
      const [h, r] = new Date(`1970-01-01T${hour}:${splitMinutes}Z`)
        .toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour12: true,
          hour: 'numeric',
          minute: 'numeric',
        })
        .split(':');

      const [nm, t] = r.split(' ');

      return {
        hour: Number(h) <= 9 ? `0${Number(h)}` : h,
        minutes: nm,
        type: t,
      };
    }

    return {
      hour: Number(hour) <= 9 ? `0${Number(hour)}` : hour,
      minutes: splitMinutes,
      type: undefined,
    };
  }
};

export const handleValueAndCheck = (
  val: string | number | null,
  type: 'hour' | 'minutes',
  clockType?: OptionTypes['clockType'],
  allowNull?: OptionTypes['allowNull']
): undefined | boolean => {
  const value = Number(val);

  if (type === 'hour') {
    if (clockType !== '24h') {
      if (value > 0 && value <= 12 || allowNull) {
        return true;
      } else {
        return false;
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (value >= 0 && value <= 23 || allowNull) {
        return true;
      } else {
        return false;
      }
    }
  }

  if (type === 'minutes') {
    if (value >= 0 && value <= 59 || allowNull) {
      return true;
    } else {
      return false;
    }
  }
};
