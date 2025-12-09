import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Dự án Nuôi Hào</h2>
        
        <div className="max-w-2xl mx-auto space-y-4 text-sm">
          <p>
            Đây là website được tạo ra với mục đích giải trí (và kiếm tiền thật nếu bạn donate thật). 
            Không liên quan đến bất kỳ tổ chức tín dụng hay từ thiện uy tín nào.
          </p>
          <p>
            Bản quyền © 2024 thuộc về Hào. Mọi hành vi sao chép ý tưởng đều bị lên án trừ khi bạn donate.
          </p>
          <div className="pt-8 flex justify-center space-x-6 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Chính sách không hoàn tiền</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Liên hệ Hào</a>
          </div>
        </div>
      </div>
    </footer>
  );
};