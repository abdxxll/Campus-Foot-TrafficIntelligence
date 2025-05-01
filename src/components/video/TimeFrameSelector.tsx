import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { format } from 'date-fns';

interface TimeFrameSelectorProps {
  onTimeFrameSelect: (startTime: Date, endTime: Date) => void;
  className?: string;
}

export function TimeFrameSelector({ onTimeFrameSelect, className }: TimeFrameSelectorProps) {
  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<string>('00:00');
  const [endTime, setEndTime] = useState<string>('01:00');

  const handleTimeFrameSelect = () => {
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);

    const startDateTime = new Date(date);
    startDateTime.setHours(startHours, startMinutes);

    const endDateTime = new Date(date);
    endDateTime.setHours(endHours, endMinutes);

    onTimeFrameSelect(startDateTime, endDateTime);
  };

  return (
    <div className={`flex flex-col items-center w-[400px] mx-auto space-y-6 bg-white p-6 rounded-lg border border-gray-200 ${className}`}>
      <div className="flex items-center gap-3 w-full">
        <CalendarIcon className="h-4 w-4 text-black shrink-0" />
        <input
          type="date"
          value={format(date, 'yyyy-MM-dd')}
          onChange={(e) => setDate(new Date(e.target.value))}
          className="border rounded-md px-3 h-9 text-sm bg-white text-black w-full"
        />
      </div>

      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-3 flex-1">
          <ClockIcon className="h-4 w-4 text-black shrink-0" />
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="border rounded-md px-3 h-9 text-sm bg-white text-black w-full"
          />
        </div>
        <span className="text-black px-2">to</span>
        <div className="flex items-center gap-3 flex-1">
          <ClockIcon className="h-4 w-4 text-black shrink-0" />
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="border rounded-md px-3 h-9 text-sm bg-white text-black w-full"
          />
        </div>
      </div>

      <Button 
        onClick={handleTimeFrameSelect}
        className="bg-white text-black hover:bg-gray-100 border border-gray-200 h-9 px-4 w-[250px]"
      >
        Set Time Frame
      </Button>
    </div>
  );
} 