"use client";
import React, { useState, useEffect } from 'react';
import { CheckCircle, X, User, Phone } from 'lucide-react';

const SuccessNotification = () => {
  type Notification = {
  id: number;
  user: {
    name: string;
    phone: string;
  };
  timestamp: string;
};

const [notifications, setNotifications] = useState<Notification[]>([]);


  // Fake user data for demonstration
  const fakeUsers = [
    { name: 'Nguyễn Văn Thành', phone: '09012***67' },
    { name: 'Trần Thị Xoạn', phone: '09123***74' },
    { name: 'Lê Minh Tú', phone: '09234***89' },
    { name: 'Phạm Thu Hương', phone: '09345***90' },
    { name: 'Trần Thu Hà', phone: '09345***32' },
    { name: 'Phan Huy Hoàng', phone: '09345***84' },
    { name: 'Trần Văn Hải', phone: '09345***62' },
    { name: 'Phạm Thúy Hường', phone: '09345***11' },
    { name: 'Nguyễn Quốc Long', phone: '09345***88' },
    { name: 'Hoàng Văn Hùng', phone: '09456***08' }
  ];

  const showNotification = () => {
    const randomUser = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
    const newNotification = {
      id: Date.now(),
      user: randomUser,
      timestamp: new Date().toLocaleTimeString('vi-VN')
    };

    setNotifications(prev => [...prev, newNotification]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(notif => notif.id !== newNotification.id));
    }, 5000);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  // Auto show notification every 10 seconds for demo
  useEffect(() => {
    const interval = setInterval(() => {
      showNotification();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Notifications Container - Fixed at bottom right */}
      <div className="fixed bottom-6 right-4 z-50 space-y-3 w-80 max-w-[calc(100vw-2rem)] sm:w-96">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white rounded-lg shadow-2xl border-l-4 border-green-500 p-3 sm:p-4 transform transition-all duration-300 ease-out animate-slide-in"
            style={{
              animation: 'slideIn 0.3s ease-out forwards'
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-base">
                    Đăng ký thành công! 🎉
                  </h3>
                </div>
              </div>
              <button
                onClick={() => removeNotification(notification.id)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mt-3 pl-8 sm:pl-12 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <User size={16} className="text-blue-500" />
                <span className="font-medium">{notification.user.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Phone size={16} className="text-green-500" />
                <span>{notification.user.phone}</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {notification.timestamp}
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 bg-gray-200 rounded-full h-1">
              <div 
                className="bg-green-500 h-1 rounded-full animate-progress"
                style={{
                  animation: 'progress 5s linear forwards'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        
        .animate-progress {
          animation: progress 5s linear forwards;
        }
      `}</style>
    </>
  );
};

export default SuccessNotification;
