import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SplitPaneProps {
  children: [React.ReactNode, React.ReactNode];
  defaultSplit?: number;
  minLeftWidth?: number;
  minRightWidth?: number;
  className?: string;
  leftPaneClassName?: string;
  rightPaneClassName?: string;
  dividerClassName?: string;
}

export function SplitPane({
  children,
  defaultSplit = 68,
  minLeftWidth = 30,
  minRightWidth = 20,
  className,
  leftPaneClassName,
  rightPaneClassName,
  dividerClassName
}: SplitPaneProps) {
  const [leftWidth, setLeftWidth] = useState(defaultSplit);
  const splitPaneRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !splitPaneRef.current) return;

      const splitPaneRect = splitPaneRef.current.getBoundingClientRect();
      const splitPaneWidth = splitPaneRect.width;
      const newLeftWidth = ((e.clientX - splitPaneRect.left) / splitPaneWidth) * 100;

      // Apply constraints
      if (newLeftWidth >= minLeftWidth && (100 - newLeftWidth) >= minRightWidth) {
        setLeftWidth(newLeftWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, minLeftWidth, minRightWidth]);

  return (
    <div 
      ref={splitPaneRef} 
      className={cn("flex h-full relative", className)}
    >
      {/* Left Pane */}
      <div 
        className={cn("overflow-auto", leftPaneClassName)} 
        style={{ width: `${leftWidth}%` }}
      >
        {children[0]}
      </div>

      {/* Divider */}
      <div 
        className={cn(
          "w-1 bg-border hover:bg-primary/50 cursor-col-resize relative z-10",
          isDragging && "bg-primary",
          dividerClassName
        )}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute inset-y-0 -right-1 -left-1" />
      </div>

      {/* Right Pane */}
      <div 
        className={cn("overflow-auto", rightPaneClassName)} 
        style={{ width: `${100 - leftWidth - 0.25}%` }}
      >
        {children[1]}
      </div>
    </div>
  );
}