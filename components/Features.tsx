import React from 'react';
import { EyeOff, Gift, Lock, Smile } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <EyeOff size={32} />,
      title: "Không Sao Kê",
      description: "Chúng tôi cam kết bảo mật tuyệt đối dòng tiền. Ngay cả Hào đôi khi cũng không biết tiền tiêu đi đâu."
    },
    {
      icon: <Lock size={32} />,
      title: "Bảo Mật Kém",
      description: "Thông tin donate của bạn sẽ được Hào khoe khắp nơi nếu số tiền đủ lớn. < 10k thì ẩn danh."
    },
    {
      icon: <Gift size={32} />,
      title: "Quyền Lợi Đặc Biệt",
      description: "Donate trên 500k được Hào kết bạn Facebook và like ảnh dạo trong 1 tuần."
    },
    {
      icon: <Smile size={32} />,
      title: "Niềm Vui Nhân Đôi",
      description: "Bạn vui vì làm việc tốt, Hào vui vì có tiền. Win-Win situation."
    }
  ];

  return (
    <div className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Tại sao nên chọn Nuôi Hào?</h2>
          <p className="text-gray-600">Khác biệt hoàn toàn với các dự án từ thiện khác.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 p-4 bg-green-100 text-green-600 rounded-xl mr-6">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};