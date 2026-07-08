import { ClockIcon, CalendarIcon } from "lucide-react";

interface IDateTimecomponentProps {
  scheduleDate: string;
  setScheduleDate: (val: string) => void;
  scheduleTime: string;
  setScheduleTime: (val: string) => void;
}

const DateTimeComponent = ({
  scheduleDate,
  setScheduleDate,
  scheduleTime,
  setScheduleTime,
}: IDateTimecomponentProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {/* date */}
      <div>
        <label
          htmlFor="date-input"
          className="block text-xs text-slate-500 uppercase mb-2"
        >
          Date
        </label>
        <div className="relative">
          <CalendarIcon className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            id="date-input"
            type="date"
            required
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-sm outline-none"
          />
        </div>
      </div>
      {/* time */}
      <div>
        <label
          htmlFor="time-input"
          className="block text-xs text-slate-500 uppercase mb-2"
        >
          time
        </label>
        <div className="relative">
          <ClockIcon className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            id="time-input"
            type="time"
            required
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-sm outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DateTimeComponent;
