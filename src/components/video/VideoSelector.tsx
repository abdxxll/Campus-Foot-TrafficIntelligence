import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { videos } from '@/data/videos';
import { Loader2Icon } from 'lucide-react';
import { useState } from 'react';
import { TimeFrameSelector } from './TimeFrameSelector';

interface VideoSelectorProps {
  selectedVideoId: string | null;
  onSelectVideo: (videoId: string) => void;
  onGenerateInsights: (startTime: Date, endTime: Date) => void;
  isLoading: boolean;
  className?: string;
}

export function VideoSelector({
  selectedVideoId,
  onSelectVideo,
  onGenerateInsights,
  isLoading,
  className
}: VideoSelectorProps) {
  const [timeFrameSelected, setTimeFrameSelected] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const handleTimeFrameSelect = (start: Date, end: Date) => {
    setStartTime(start);
    setEndTime(end);
    setTimeFrameSelected(true);
  };

  const handleGenerateInsights = () => {
    if (startTime && endTime) {
      onGenerateInsights(startTime, endTime);
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold">Location Analytics</h2>
        <p className="text-sm text-muted-foreground">
          Select a location and time frame to analyze its activity
        </p>
      </div>

      <div className="flex flex-col items-center space-y-4 w-full max-w-[400px]">
        <Select
          value={selectedVideoId || ''}
          onValueChange={onSelectVideo}
        >
          <SelectTrigger className="h-9 w-[400px]">
            <SelectValue placeholder="Choose a location" />
          </SelectTrigger>
          <SelectContent>
            {videos.map((video) => (
              <SelectItem key={video.id} value={video.id}>
                {video.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedVideoId && (
          <TimeFrameSelector
            onTimeFrameSelect={handleTimeFrameSelect}
          />
        )}

        <Button 
          onClick={handleGenerateInsights} 
          disabled={!selectedVideoId || !timeFrameSelected || isLoading}
          className="h-9 px-4 w-[250px]"
        >
          {isLoading ? (
            <>
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              Generating Insights
            </>
          ) : (
            'Generate Insights'
          )}
        </Button>
      </div>
    </div>
  );
}