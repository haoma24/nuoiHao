import React from "react";
import { EyeOff, Gift, Lock, Smile } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Smile size={32} />,
      title: "Mục tiêu",
      description:
        "Duy trì sự sống và chỉ số hạnh phúc của Hào trên mức trung bình.",
    },
    {
      icon: <Gift size={32} />,
      title: "Quyền lợi của bạn",
      description:
        "Được Hào trả lời tin nhắn (nếu donate), được yêu thương và biết ơn vô cùng tận.",
    },
    {
      icon: <Lock size={32} />,
      title: "Minh bạch",
      description:
        "100% số tiền donate sẽ được chuyển hóa trực tiếp vào dạ dày của Hào.",
    },
  ];

  return (
    <div className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Hào là ai? Tại sao nên nuôi Hào
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto md:text-lg">
            Lấy cảm hứng từ dự án “Nuôi Em”, “Nuôi Hào” ra đời với sứ mệnh đảm
            bảo Hào không bị đói trong lúc chạy deadline. Hào cần caffeine và đồ
            ăn ngon để chuyển hóa thành những dòng code (đôi khi có bug) và ý
            tưởng sáng tạo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 p-4 bg-green-100 text-green-600 rounded-xl mr-6">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
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
