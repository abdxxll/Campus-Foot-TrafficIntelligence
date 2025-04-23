import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

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
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col sm:flex-row gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full sm:w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => newDate && setDate(newDate)}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <ClockIcon className="h-4 w-4" />
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="border rounded-md px-2 py-1 text-white bg-black"
            />
          </div>
          <span className="flex items-center">to</span>
          <div className="flex items-center gap-2">
            <ClockIcon className="h-4 w-4" />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="border rounded-md px-2 py-1 text-white bg-black"
            />
          </div>
        </div>
      </div>

      <Button 
        onClick={handleTimeFrameSelect}
        className="w-full"
      >
        Set Time Frame
      </Button>
    </div>
  );
} 