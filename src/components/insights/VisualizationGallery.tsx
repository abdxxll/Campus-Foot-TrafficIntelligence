import { Insight } from '@/types';
import { VizCard } from './VizCard';
import { cn } from '@/lib/utils';

interface VisualizationGalleryProps {
  insights: Insight[];
  selectedInsightId: string | null;
  onSelectInsight: (insightId: string) => void;
  className?: string;
}

export function VisualizationGallery({
  insights,
  selectedInsightId,
  onSelectInsight,
  className
}: VisualizationGalleryProps) {
  if (insights.length === 0) {
    return (
      <div className={className}>
        <div className="text-center p-8 border border-dashed rounded-lg">
          <p className="text-muted-foreground">
            No insights available. Select a video and generate insights.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {insights.map((insight) => (
          <VizCard
            key={insight.id}
            insight={insight}
            isSelected={selectedInsightId === insight.id}
            onClick={() => onSelectInsight(insight.id)}
          />
        ))}
      </div>
    </div>
  );
}