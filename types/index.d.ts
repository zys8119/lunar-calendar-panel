export interface lunarCalendarPanelConstructor extends lunarCalendarPanel{
    (this:lunarCalendarPanel):lunarCalendarPanel;
}

export interface lunarCalendarPanel{
    config?:config;
    /**
     * 判断是否为闰年
     * @param year 年份
     */
    is_leap?(year:number):number;

    /**
     * 判断月份大小并返回当月天数
     * @param month 月份
     * @param year 年份
     */
    is_Month(month:number,year:number):number;
    /**
     * 返回日历数据
     * @param year 年份
     * @param month 月份
     */
    returnDate(year?:number,month?:number):returnDate[];
    /**
     * 百度【天干地支纪年法】,获取农历
     * @param year 年
     * @param month 月
     * @param date 日
     */
    getLunarCalendar(year:number, month:number, date:number):any;
    /**
     *  获取年数
     * @param targetYear 目标年
     * @param max 最大年个数
     */
    getYearNum(targetYear:number, max:number):any;
    /**
     * 获取年干或年支
     * @param year 目标年
     * @param num 最大年个数
     */
    getN(year:number, num:number):any;
}

export type config = {
    tg:tg[];
    dz:tg[];
    month:month;
    monthNb:number[];
    dayNb:dayNb;
    NumString:string;
    MonString:string;
    yearNumArr:yearNumArr;
    max:number;
}
export type yearNumArr = {
    [key:number]:number
}
export type dayNb = {
    [key:number]:string
}
export type month = {
    [key:string]:string[]
}
export type tg = {
    name:string;
    code:string;
    sx?:string;
}

export type returnDate = {
    [key:string]:any;
    week:number;// 星期几，1-6
    name:string;// 星期几，字符串
    Explain:string;// 字段描述
    dateDayIndex:number;// 当天号数
    getDateIdex:number;// 当月总天数
    getDateIdex_Lastmonth:number;// 上月总天数
    getDateIdex_Nextmonth:number;// 下月总天数
    type:string | 'prev' | 'current' | 'next';// 上月、当月、下月
    day:number;// 当日
    dateYear:number;// 当年
    dateMonth:number;// 当月
    calendar:returnDateCalendar;// 农历数据，可以确定具体月份及日期
    LunarCalendar:returnDateLunarCalendar;// 农历数据二，可以确定年份
    getDayAll:string;// 当日所属年月日
}

export type returnDateCalendar = {
    date:string;// 阳历
    festival:string;// 阳历节日
    cYear:number;// 阳历年
    cMonth:number;// 阳历月
    cDay:number;// 阳历日

    lunarDate:string;// 阴历
    lunarFestival:string;// 农历的节日
    lYear:number;// 农历的年
    lMonth:number;// 农历的月
    lDay:number;// 农历的日
    Animal:string;// 当日所属十二生肖
    IMonthCn:string;// 农历大写月
    IDayCn:string;// 农历大写日
    gzYear:string;// 当日农历年大写,年干支
    gzMonth:string;// 当日农历月大写，月干支
    gzDay:string;// 当日农历日大写，日干支
    isToday:string;// 是否当日
    isLeap:string;// 是否闰年

    nWeek:number;// 周几
    ncWeek:string;// 周几
    isTerm:boolean;
    Term:string;
    astro:string;// 当日星座
}


export type returnDateLunarCalendar = {
    yearNb:number,// 年数
    monthNb:number,// 月数
    daySum:string,// 日数
    args:number[]// 年月日,
    year_tg:returnDateLunarCalendar_year_tg,// 年天干
    year_dz:returnDateLunarCalendar_year_dz,// 年地支
    month:string //农历月
    day:string,// 农历月
    month_str:string//农历月大写
}

export type returnDateLunarCalendar_year_tg = {
    name:string;// 天干
    code:string;// 天干拼音
}

export type returnDateLunarCalendar_year_dz = {
    name:string;// 地支
    code:string;// 地支拼音
    sx:string;// 所属十二生肖
}


export class lunarCalendarPanel implements lunarCalendarPanel{
}


/**
 * @1900-2100区间内的公历、农历互转
 * @charset UTF-8
 * @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
 * @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
 */
export type calendarType = {
    [key:string]:any & ((...args:any[])=>any)
    /**
     * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
     * @param year  solar year
     * @param month  solar month
     * @param day  solar day
     * @return JSON object
     * @eg:console.log(calendar.solar2lunar(1987,11,01));
     */
    solar2lunar(year:number, month:number, day:number):returnDateCalendar;
    /**
     * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
     * @param year  lunar year
     * @param month  lunar month
     * @param day  lunar day
     * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
     * @return JSON object
     * @eg:console.log(calendar.lunar2solar(1987,9,10));
     */
    lunar2solar(year:number, month:number, day:number, isLeapMonth?:any):returnDateCalendar;
}
export const  calendar:calendarType

export default lunarCalendarPanel;


