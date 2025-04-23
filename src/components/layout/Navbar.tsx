import { VideoIcon } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="h-16 bg-black text-white flex items-center border-b border-gray-800">
      <div className="flex items-center px-4">
        <VideoIcon className="h-5 w-5 text-primary mr-2" />
        <h1 className="text-xl font-semibold">AID Analytics</h1>
      </div>
    </nav>
  );
} 