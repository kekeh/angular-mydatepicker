import {IMyDayLabels} from "./my-day-labels.interface";
import {IMyMonthLabels} from "./my-month-labels.interface";
import {IMyDate} from "./my-date.interface";
import {IMyDateRange} from "./my-date-range.interface";
import {IMyMarkedDates} from "./my-marked-dates.interface";
import {IMyMarkedDate} from "./my-marked-date.interface";
import {IMyStyles} from "./my-styles.interface";
import {DefaultView} from "../enums/default-view.enum";
import {Year} from "../enums/year.enum";

export interface IMyOptions {
  dateRange?: boolean;
  inline?: boolean;
  dayLabels?: IMyDayLabels;
  monthLabels?: IMyMonthLabels;
  dateFormat?: string;
  defaultView?: DefaultView;
  firstDayOfWeek?: string;
  satHighlight?: boolean;
  sunHighlight?: boolean;
  highlightDates?: Array<IMyDate>;
  markCurrentDay?: boolean;
  markCurrentMonth?: boolean;
  markCurrentYear?: boolean;
  monthSelector?: boolean;
  yearSelector?: boolean;
  disableHeaderButtons?: boolean;
  showWeekNumbers?: boolean;
  selectorHeight?: string;
  selectorWidth?: string;
  disableUntil?: IMyDate;
  disableSince?: IMyDate;
  disableDates?: Array<IMyDate>;
  disableDateRanges?: Array<IMyDateRange>;
  disableWeekends?: boolean;
  disableWeekdays?: Array<string>;
  enableDates?: Array<IMyDate>;
  markDates?: Array<IMyMarkedDates>;
  markWeekends?: IMyMarkedDate;
  alignSelectorRight?: boolean;
  openSelectorTopOfInput?: boolean;
  closeSelectorOnDateSelect?: boolean;
  closeSelectorOnDocumentClick?: boolean;
  minYear?: Year;
  maxYear?: Year;
  showSelectorArrow?: boolean;
  appendSelectorToBody?: boolean;
  focusInputOnDateSelect?: boolean;
  moveFocusByArrowKeys?: boolean;
  dateRangeDatesDelimiter?: string;
  inputFieldValidation?: boolean;
  stylesData?: IMyStyles;
  ariaLabelPrevMonth?: string;
  ariaLabelNextMonth?: string;
  todayBtnTxt?:string;
}

export interface IAngularMyDpOptions extends IMyOptions { }
