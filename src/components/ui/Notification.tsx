import React from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import { useNotification } from '../../context/NotificationContext';

const Notification: React.FC = () => {
  const { notification, hideNotification } = useNotification();

  if (!notification) return null;

  const { type, message } = notification;

  return (
    <div className="notification">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <AlertCircle className="h-5 w-5 text-secondary-500" />
          )}
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">{message}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            className="inline-flex text-gray-400 hover:text-gray-500"
            onClick={hideNotification}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;