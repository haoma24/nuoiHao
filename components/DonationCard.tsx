import React from "react";
import { Copy, CheckCircle2, ShieldAlert } from "lucide-react";

interface DonationCardProps {
  onCopy: () => void;
}

export const DonationCard: React.FC<DonationCardProps> = ({ onCopy }) => {
  // Mock data - Replace with your actual MoMo phone number
  const accountInfo = {
    bank: "Ví MoMo",
    number: "0834592352", // Placeholder
    name: "MA DI HAO",
    content: "NUOI HAO",
  };

  const donationOptions = [
    { label: "1 ly cà phê", amount: "50.000đ", icon: "☕" },
    { label: "1 bát phở", amount: "60.000đ", icon: "🍜" },
    { label: "1 suất cơm văn phòng", amount: "70.000đ", icon: "🍱" },
    { label: "Combo deadline xuyên đêm", amount: "120.000đ", icon: "⚡" },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy();
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-6xl w-full border-4 border-[#a50064] relative transform transition-transform hover:scale-[1.01]">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-extrabold shadow-lg uppercase text-sm tracking-wider">
        Khuyến khích chuyển nhiều
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* QR Section */}
        <div className="flex flex-col items-center">
          {/* 
              IMPORTANT: Replace the src below with your actual MoMo QR Code image file.
            */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#a50064] rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <img
              src="/momo-qr.jpg"
              alt="Mã QR MoMo Nuôi Hào"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl border-2 border-gray-100 shadow-sm object-contain bg-white p-2"
            />
          </div>
          <p className="mt-4 text-sm text-gray-500 font-medium">
            Quét mã bằng ứng dụng MoMo
          </p>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              Thông tin chuyển khoản
              <CheckCircle2 className="ml-2 text-[#a50064]" size={20} />
            </h3>
            <p className="text-gray-500 text-sm">
              Vui lòng kiểm tra kỹ thông tin. Sai Hào vẫn nhận.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
              <p className="text-xs text-gray-500 uppercase font-bold mb-1">
                Ví điện tử
              </p>
              <p className="text-lg font-bold text-[#a50064]">
                {accountInfo.bank}
              </p>
            </div>

            <div
              className="bg-pink-50 p-4 rounded-xl border border-pink-100 relative group cursor-pointer"
              onClick={() => handleCopy(accountInfo.number)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">
                    Số điện thoại
                  </p>
                  <p className="text-xl md:text-2xl font-mono font-bold text-[#a50064]">
                    {accountInfo.number}
                  </p>
                </div>
                <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-pink-100 text-[#a50064] transition-colors">
                  <Copy size={20} />
                </button>
              </div>
              <span className="absolute top-2 right-2 text-xs text-[#a50064] opacity-0 group-hover:opacity-100 transition-opacity">
                Chạm để sao chép
              </span>
            </div>

            <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
              <p className="text-xs text-gray-500 uppercase font-bold mb-1">
                Chủ tài khoản
              </p>
              <p className="text-lg font-bold text-gray-800 uppercase">
                {accountInfo.name}
              </p>
            </div>

            <div
              className="bg-pink-50 p-4 rounded-xl border border-pink-100 cursor-pointer"
              onClick={() => handleCopy(accountInfo.content)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">
                    Lời nhắn
                  </p>
                  <p className="text-lg font-bold text-gray-800">
                    {accountInfo.content}
                  </p>
                </div>
                <Copy
                  size={16}
                  className="text-gray-400 hover:text-[#a50064]"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start bg-red-50 p-3 rounded-lg text-red-700 text-sm">
            <ShieldAlert size={18} className="mt-0.5 mr-2 flex-shrink-0" />
            <p>
              <strong>Cảnh báo:</strong> Đừng quên ghi nội dung để Hào biết ai
              donate mà cảm ơn (hoặc không).
            </p>
          </div>
        </div>

        {/* Suggestions Section */}
        <div className="space-y-4">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-700 text-center md:text-left">
              Gợi ý mệnh giá (chạm để sao chép):
            </p>
            <div className="grid grid-cols-1 gap-3">
              {donationOptions.map((option) => (
                <button
                  key={option.label}
                  className="w-full text-left p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md bg-white transition hover:-translate-y-0.5"
                  onClick={() =>
                    handleCopy(
                      `${option.label} - ${option.amount} - ${accountInfo.content}`
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{option.icon}</span>
                      <span className="font-semibold text-gray-800">
                        {option.label}
                      </span>
                    </div>
                    <span className="text-[#a50064] font-bold">
                      {option.amount}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Sao chép: {option.label} | {option.amount}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
