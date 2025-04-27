import { cn } from '@/lib/utils';
import { HomeIcon } from 'lucide-react';
import asuFullLogo from '@/assets/ASU-Logo.jpg';

interface TopbarProps {
  className?: string;
}

export function Topbar({ className }: TopbarProps) {
  return (
    <header className={cn('sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60', className)}>
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-4 min-w-[350px]">
          <img src={asuFullLogo} alt="ASU Logo" className="h-12 w-auto" />
        </div>
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-16">
          <a href="#" className="flex flex-col items-center text-gray-900 font-medium px-2 py-1 border-b-2 border-yellow-400">
            <HomeIcon className="h-5 w-5 mb-1" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-2 py-1">Videos</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-2 py-1">Analytics</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-2 py-1">Audience</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-2 py-1">Settings</a>
        </nav>
        {/* Right section intentionally left empty for symmetry */}
      </div>
    </header>
  );
}