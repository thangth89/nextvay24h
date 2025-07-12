"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Handshake, FileText, CheckCircle, Users } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    customers: 0,
    today: 0,
    approval: 0,
    satisfaction: 0
  });
  const sectionRef = useRef(null);

  const finalNumbers = {
    customers: 23802,
    today: 114,
    approval: 96,
    satisfaction: 95
  };

  const stats = [
    {
      icon: <Handshake className="w-8 h-8 text-white" />,
      key: 'customers',
      label: "Lượt khách hàng đăng ký vay",
      suffix: ""
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      key: 'today',
      label: "Lượt đăng ký hôm nay",
      suffix: ""
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      key: 'approval',
      label: "Đơn vay được phê duyệt",
      suffix: "%"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      key: 'satisfaction',
      label: "Khách hàng hài lòng",
      suffix: "%"
    }
  ];

  // Intersection Observer để phát hiện khi section xuất hiện
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animation đếm số
  useEffect(() => {
    if (!isVisible) return;
    type StatKey = 'customers' | 'today' | 'approval' | 'satisfaction';
    const animateNumber = (key: StatKey, finalValue: number, duration = 2000) => {
      const steps = 60;
      const increment = finalValue / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.floor(increment * step), finalValue);
        
        setAnimatedNumbers(prev => ({
          ...prev,
          [key]: current
        }));

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return timer;
    };

    // Bắt đầu animation cho từng số với delay khác nhau
    const timers = [
      setTimeout(() => animateNumber('customers', finalNumbers.customers, 2500), 200),
      setTimeout(() => animateNumber('today', finalNumbers.today, 2000), 400),
      setTimeout(() => animateNumber('approval', finalNumbers.approval, 2000), 600),
      setTimeout(() => animateNumber('satisfaction', finalNumbers.satisfaction, 2000), 800)
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="bg-gradient-to-r from-orange-400 to-orange-500 py-16 px-8 rounded-xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            NHỮNG CON SỐ BIẾT NÓI
          </h2>
          <div className="w-24 h-1 bg-white/30 mx-auto"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-white mb-4 font-mono">
                {animatedNumbers[stat.key].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-white/90 text-lg leading-relaxed px-4">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;