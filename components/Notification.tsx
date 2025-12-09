import React from 'react';
import { Check } from 'lucide-react';

interface NotificationProps {
  message: string;
}

export const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-bounce">
      <div className="bg-slate-900 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3">
        <div className="bg-green-500 rounded-full p-1">
            <Check size={14} strokeWidth={3} />
        </div>
        <span className="font-semibold">{message}</span>
      </div>
    </div>
  );
};