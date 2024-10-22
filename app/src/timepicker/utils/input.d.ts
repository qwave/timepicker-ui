import { OptionTypes } from './types';
export declare const getInputValue: (el: HTMLInputElement, clockType?: string, currentTime?: OptionTypes['currentTime'], updateOptions?: boolean) => {
    hour: string;
    minutes: string;
    type: string | undefined;
};
export declare const handleValueAndCheck: (val: string | number | null, type: 'hour' | 'minutes', clockType?: OptionTypes['clockType'], allowNull?: OptionTypes['allowNull']) => undefined | boolean;
