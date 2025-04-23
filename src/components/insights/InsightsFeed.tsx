import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Chip } from '@/components/ui/chip';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { mockInsights } from '@/data/insights';
import { videos } from '@/data/videos';
import { CATEGORY_COLORS } from '@/lib/constants';

interface InsightsFeedProps {
  className?: string;
}

interface FeedItem {
  id: string;
  videoId: string;
  videoTitle: string;
  insightTitle: string;
  keyTakeaway: string;
  timestamp: string; // ISO string
  category: string;
}

export function InsightsFeed({ className }: InsightsFeedProps) {
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [filter, setFilter] = useState<string | null>(null);

  // Generate feed items from mock data
  useEffect(() => {
    const items: FeedItem[] = [];
    
    Object.entries(mockInsights).forEach(([videoId, insights]) => {
      const video = videos.find(v => v.id === videoId);
      if (!video) return;
      
      insights.forEach(insight => {
        items.push({
          id: insight.id,
          videoId,
          videoTitle: video.title,
          insightTitle: insight.title,
          keyTakeaway: insight.keyTakeaway,
          timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
          category: insight.category
        });
      });
    });
    
    // Sort by timestamp (newest first)
    items.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    setFeed(items);
  }, []);

  function formatTimeAgo(timestamp: string) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffDays > 0) {
      return `${diffDays}d ago`;
    } else {
      return `${diffHours}h ago`;
    }
  }

  const filteredFeed = filter 
    ? feed.filter(item => item.category === filter)
    : feed;

  return (
    <div className={cn("flex flex-col h-full bg-background", className)}>
      <div className="px-4 py-3 border-b">
        <h3 className="font-semibold">Insights Feed</h3>
        <p className="text-xs text-muted-foreground">
          Latest insights across all videos
        </p>
      </div>
      
      <div className="p-2 flex gap-2 overflow-auto border-b">
        <Button 
          variant={filter === null ? "default" : "ghost"} 
          size="sm"
          onClick={() => setFilter(null)}
        >
          All
        </Button>
        <Button 
          variant={filter === "engagement" ? "default" : "ghost"} 
          size="sm"
          onClick={() => setFilter("engagement")}
        >
          Engagement
        </Button>
        <Button 
          variant={filter === "demographics" ? "default" : "ghost"} 
          size="sm"
          onClick={() => setFilter("demographics")}
        >
          Demographics
        </Button>
        <Button 
          variant={filter === "conversion" ? "default" : "ghost"} 
          size="sm"
          onClick={() => setFilter("conversion")}
        >
          Conversion
        </Button>
        <Button 
          variant={filter === "sentiment" ? "default" : "ghost"} 
          size="sm"
          onClick={() => setFilter("sentiment")}
        >
          Sentiment
        </Button>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4">
          {filteredFeed.length === 0 ? (
            <div className="text-center p-4">
              <p className="text-sm text-muted-foreground">No insights found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFeed.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium line-clamp-1">{item.insightTitle}</p>
                    <Chip 
                      variant="outline"
                      className={cn(
                        "text-xs border-0",
                        CATEGORY_COLORS[item.category as keyof typeof CATEGORY_COLORS]
                      )}
                    >
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </Chip>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {item.keyTakeaway}
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{item.videoTitle}</span>
                    <span>{formatTimeAgo(item.timestamp)}</span>
                  </div>
                  <Separator />
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}