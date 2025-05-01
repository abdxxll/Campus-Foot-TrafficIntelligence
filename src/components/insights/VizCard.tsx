import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Chip } from '@/components/ui/chip';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Insight } from '@/types';
import { cn } from '@/lib/utils';
import { CATEGORY_COLORS, CONFIDENCE_COLORS } from '@/lib/constants';
import { SearchIcon } from 'lucide-react';

interface VizCardProps {
  insight: Insight;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

export function VizCard({ insight, isSelected, onClick, className }: VizCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Reset tooltip when selected changes
  useEffect(() => {
    setShowTooltip(false);
  }, [isSelected]);

  return (
    <Card 
      className={cn(
        "cursor-pointer group transition-all overflow-hidden hover:shadow-lg shadow-md rounded-xl bg-white border border-gray-200",
        isSelected && "ring-2 ring-primary",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-0 relative">
        {/* Aspect Ratio Container for Visualization and Overlays */}
        <div className="relative w-full aspect-[16/10] bg-gray-50 overflow-hidden rounded-t-xl">
          <img 
            src={insight.visualization.imageUrl} 
            alt={insight.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
            <h3 className="font-medium text-sm drop-shadow-md">{insight.title}</h3>
          </div>
          {/* Category Chip */}
          <div className="absolute top-3 left-3">
            <Chip 
              variant="outline"
              className={cn(
                "text-xs border-0",
                CATEGORY_COLORS[insight.category]
              )}
            >
              {insight.category.charAt(0).toUpperCase() + insight.category.slice(1)}
            </Chip>
          </div>
          {/* Confidence Indicator */}
          <TooltipProvider>
            <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
              <TooltipTrigger asChild>
                <div 
                  className="absolute top-3 right-3 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTooltip(!showTooltip);
                  }}
                >
                  <Chip 
                    variant="outline"
                    className={cn(
                      "text-xs border-0",
                      CONFIDENCE_COLORS[insight.confidence]
                    )}
                  >
                    {insight.confidence.charAt(0).toUpperCase() + insight.confidence.slice(1)} Confidence
                  </Chip>
                </div>
              </TooltipTrigger>
              <TooltipContent side="left" className="max-w-xs">
                <p className="text-sm">{insight.keyTakeaway}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* Search Icon Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
            <SearchIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}