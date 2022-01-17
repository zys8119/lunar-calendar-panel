# lunar-calendar-panel

农历面板、万年历、农历公历互转

使用
```typescript
import lunarCalendarPanel from "lunar-calendar-panel"

const lcp = new lunarCalendarPanel();

// 获取月份数据
console.log(lcp.returnDate(2022, 1, 1));

// 农历转公历
console.log(lcp.solar2lunar(2022, 1, 1));

// 公历转农历
console.log(lcp.lunar2solar(2022, 1, 1));
```
