import { useState } from 'react';
import { Insight } from '@/types';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Chip } from '@/components/ui/chip';
import { CONFIDENCE_COLORS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface InsightPaneProps {
  insight: Insight | null;
  insights: Insight[];
  onNavigate: (insightId: string) => void;
  className?: string;
}

export function InsightPane({ insight, insights, onNavigate, className }: InsightPaneProps) {
  const [activeTab, setActiveTab] = useState('takeaway');

  if (!insight) {
    return (
      <Card className={cn("p-6", className)}>
        <div className="h-full flex items-center justify-center text-center">
          <p className="text-muted-foreground">
            Select an insight to view details
          </p>
        </div>
      </Card>
    );
  }

  const currentIndex = insights.findIndex(i => i.id === insight.id);
  const prevInsight = insights[currentIndex - 1];
  const nextInsight = insights[currentIndex + 1];

  return (
    <Card className={cn("flex flex-col", className)}>
      <div className="flex items-center justify-between border-b p-4">
        <h3 className="font-semibold">{insight.title}</h3>
        <Chip
          variant="outline"
          className={cn(
            "text-xs",
            CONFIDENCE_COLORS[insight.confidence]
          )}
        >
          {insight.confidence.charAt(0).toUpperCase() + insight.confidence.slice(1)} Confidence
        </Chip>
      </div>

      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="flex-1 flex flex-col"
      >
        <TabsList className="grid grid-cols-4 p-2 m-2">
          <TabsTrigger value="takeaway">Takeaway</TabsTrigger>
          <TabsTrigger value="action">Action</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>

        <div className="flex-1 p-4 overflow-auto">
          <TabsContent value="takeaway" className="mt-0 h-full">
            <h4 className="text-sm font-medium mb-2">Key Takeaway</h4>
            {insight.keyTakeaway.includes("•") ? (
              <ul className="list-disc pl-5">
                {insight.keyTakeaway.split("•").map((item, i) => {
                  const text = item.trim();
                  return text ? <li key={i}>{text}</li> : null;
                })}
              </ul>
            ) : (
              <p>{insight.keyTakeaway}</p>
            )}
          </TabsContent>

          <TabsContent value="action" className="mt-0 h-full">
            <h4 className="text-sm font-medium mb-2">Recommended Action</h4>
            {insight.recommendedAction.includes("•") ? (
              <ul className="list-disc pl-5">
                {insight.recommendedAction.split("•").map((item, i) => {
                  const text = item.trim();
                  return text ? <li key={i}>{text}</li> : null;
                })}
              </ul>
            ) : (
              <p>{insight.recommendedAction}</p>
            )}
          </TabsContent>

          <TabsContent value="details" className="mt-0 h-full">
            <h4 className="text-sm font-medium mb-2">Detailed Analysis</h4>
            {insight.details.includes("•") ? (
              <ul className="list-disc pl-5">
                {insight.details.split("•").map((item, i) => {
                  const text = item.trim();
                  return text ? <li key={i}>{text}</li> : null;
                })}
              </ul>
            ) : (
              <p>{insight.details}</p>
            )}
          </TabsContent>

          <TabsContent value="data" className="mt-0 h-full">
            <h4 className="text-sm font-medium mb-2">Visualization Data</h4>
            <p className="text-sm text-muted-foreground">
              Type: {insight.visualization.type.charAt(0).toUpperCase() + insight.visualization.type.slice(1)} Chart
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {insight.description}
            </p>
          </TabsContent>
        </div>
      </Tabs>

      <div className="flex items-center justify-between p-4 border-t">
        <Button
          variant="outline"
          size="sm"
          onClick={() => prevInsight && onNavigate(prevInsight.id)}
          disabled={!prevInsight}
        >
          <ChevronLeftIcon className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => nextInsight && onNavigate(nextInsight.id)}
          disabled={!nextInsight}
        >
          Next
          <ChevronRightIcon className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </Card>
  );
}