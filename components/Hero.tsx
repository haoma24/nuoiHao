import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onDonateClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDonateClick }) => {
  return (
    <div className="relative bg-green-50 pt-20 pb-32 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold animate-pulse">
          🚀 Dự án "từ thiện" hot nhất 2025
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
          Cùng chung tay
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
            Nuôi Hào Lớn Khôn
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Dự án phi lợi nhuận cho cộng đồng, nhưng{" "}
          <span className="font-bold text-green-700">
            rất nhiều lợi nhuận cho Hào
          </span>
          . Một bữa sáng của bạn là niềm vui cả ngày của Hào.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={onDonateClick}
            className="w-full sm:w-auto px-8 py-4 bg-charity-green hover:bg-green-700 text-white font-bold rounded-xl text-lg shadow-xl shadow-green-200 transition-all hover:-translate-y-1 flex items-center justify-center"
          >
            Chuyển khoản ngay
            <ArrowRight className="ml-2" />
          </button>

          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-xl text-lg border border-gray-200 shadow-sm transition-all flex items-center justify-center">
            Tìm hiểu (Đừng bấm)
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-400 italic">
          *Lưu ý: Chúng tôi không chấp nhận lời cảm ơn, chỉ chấp nhận tiền mặt
          hoặc chuyển khoản.
        </p>
      </div>
    </div>
  );
};
