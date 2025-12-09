import React from 'react';
import { Coffee, TrendingUp, Users, Wallet } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Wallet className="w-8 h-8 text-blue-500" />,
      value: "0 đ",
      label: "Ngân sách hiện tại",
      desc: "Hào đang rất đói"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      value: "100%",
      label: "Tỷ lệ giải ngân",
      desc: "Vào túi Hào ngay lập tức"
    },
    {
      icon: <Coffee className="w-8 h-8 text-yellow-600" />,
      value: "∞",
      label: "Cà phê cần thiết",
      desc: "Năng lượng nuôi Hào"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      value: "1",
      label: "Người hưởng lợi",
      desc: "Chính là Hào"
    }
  ];

  return (
    <div className="bg-white py-12 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors">
              <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">{stat.label}</p>
              <p className="text-xs text-gray-500 italic">"{stat.desc}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};