import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  BellIcon, 
  MoonIcon, 
  SunIcon, 
  ListFilterIcon,
  BarChart3Icon, 
  VideoIcon, 
  LayoutDashboardIcon, 
  UsersIcon, 
  SettingsIcon,
} from 'lucide-react';
import { TooltipIconButton } from '@/components/ui/tooltip-icon-button';
import { Separator } from '@/components/ui/separator';
import asuLogo from '@/assets/asu-logo.svg';

interface TopbarProps {
  className?: string;
  onOpenInsightsFeed?: () => void;
}

const navItems = [
  {
    icon: <LayoutDashboardIcon className="h-5 w-5" />,
    label: 'Dashboard',
    href: '#',
  },
  {
    icon: <VideoIcon className="h-5 w-5" />,
    label: 'Videos',
    href: '#',
    active: true,
  },
  {
    icon: <BarChart3Icon className="h-5 w-5" />,
    label: 'Analytics',
    href: '#',
  },
  {
    icon: <UsersIcon className="h-5 w-5" />,
    label: 'Audience',
    href: '#',
  },
  {
    icon: <SettingsIcon className="h-5 w-5" />,
    label: 'Settings',
    href: '#',
  },
];

export function Topbar({ className, onOpenInsightsFeed }: TopbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={cn(
      'sticky top-0 z-30 flex flex-col bg-transparent transition-all duration-200',
      scrolled && 'bg-background/90 backdrop-blur-sm border-b',
      className
    )}>
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <VideoIcon className="h-5 w-5 text-primary" />
          <span className="font-semibold text-lg">CampusInsights</span>
          <img src={asuLogo} alt="ASU Logo" className="h-8 w-auto ml-2" />
        </div>
        
        <div className="flex items-center gap-2">
          <TooltipIconButton
            tooltip="Insights Feed"
            icon={<ListFilterIcon className="h-4 w-4" />}
            variant="outline"
            onClick={onOpenInsightsFeed}
            className="lg:hidden"
          />
          
          <TooltipIconButton
            tooltip="Notifications"
            icon={<BellIcon className="h-4 w-4" />}
            variant="outline"
          />
          
          <TooltipIconButton
            tooltip={isDarkMode ? "Light Mode" : "Dark Mode"}
            icon={isDarkMode ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            variant="outline"
            onClick={toggleDarkMode}
          />
          
          <Button variant="outline" size="sm" className="hidden md:flex">
            Export Report
          </Button>
          
          <Button variant="default" size="sm">
            Share
          </Button>
        </div>
      </div>
      <Separator />
      <div className="flex h-12 items-center px-4 gap-1">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className={cn(
              "h-9 gap-2",
              item.active && "font-medium"
            )}
            asChild
          >
            <a href={item.href}>
              {item.icon}
              <span>{item.label}</span>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}