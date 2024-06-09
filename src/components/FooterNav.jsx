import React from 'react';
import logo from '../static/footer/logo.png';
import appstore from '../static/footer/appstore.png';
import googleplay from '../static/footer/googleplay.png';
import appgallery from '../static/footer/appgallery.png';

const FooterNav = () => (
  <div className="grid grid-cols-4 grid-rows-2 py-8">
    <div className="row-span-2">
      <h3 className="uppercase">Liên hệ với Lazada</h3>
      <ul>
        <li><a href="." className="hover:underline">Hotline & Chat trực tuyến (24/7)</a></li>
        <li><a href="." className="hover:underline">Trung tâm hỗ trợ</a></li>
        <li><a href="." className="hover:underline">Hướng dẫn đặt hàng</a></li>
        <li><a href="." className="hover:underline">Giao hàng & Nhận hàng</a></li>
        <li><a href="." className="hover:underline">Chính sách hàng nhập khẩu</a></li>
        <li><a href="." className="hover:underline">Hướng dẫn đổi trả hàng</a></li>
      </ul>
    </div>
    <div className="row-span-2">
      <h3 className="uppercase">Lazada Việt Nam</h3>
      <ul>
        <li><a href="." className="hover:underline">Về Lazada Việt Nam</a></li>
        <li><a href="." className="hover:underline">Bán hàng cùng Lazada</a></li>
        <li><a href="." className="hover:underline">Chương trình Lazada Afﬁliate</a></li>
        <li><a href="." className="hover:underline">Tuyển dụng</a></li>
        <li><a href="." className="hover:underline">Điều khoản sử dụng</a></li>
        <li><a href="." className="hover:underline">Chính sách bảo mật</a></li>
        <li><a href="." className="hover:underline">Báo chí</a></li>
        <li><a href="." className="hover:underline">Bảo vệ quyền sở hữu trí tuệ</a></li>
        <li><a href="." className="hover:underline">Quy chế hoạt động sàn Lazada</a></li>
        <li><a href="." className="hover:underline">Quy trình giải quyết tranh chấp, khiếu nại</a></li>
      </ul>
    </div>
    <div className="flex flex-row items-center">
      <img src={logo} alt="Logo" className="w-11 h-11 mr-3" />
      <div>
        <p className="text-orange-600 leading-5">Go where your heart beats</p>
        <p className="leading-5">Tải App Lazada</p>
      </div>
    </div>
    <div className="flex flex-row flex-wrap">
      <img src={googleplay} alt="Google Play" className="w-1/2 h-[42px] pr-2 mb-2" />
      <img src={appstore} alt="App Store" className="w-1/2 h-[42px] mb-2" />
      <img src={appgallery} alt="AppGallery" className="w-1/2 h-[42px] pr-2 mb-2" />
    </div>
    <div className="col-start-3 col-span-2">
      <p>CÔNG TY TNHH RECESS</p>
      <p>Giấy CNĐKDN: 0308808576 &#x2013; Ngày cấp: 06/5/2009, được sửa đổi lần thứ 19 ngày 15/8/2019.</p>
      <p>Cơ quan cấp: Phòng Đăng ký kinh doanh &#x2013; Sở kế hoạch và Đầu tư TP.HCM</p>
      <p>Địa chỉ đăng ký kinh doanh: Tầng 19, Tòa nhà Saigon Centre &#x2013; Tháp 2, 67 Lê Lợi, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh, Việt Nam.</p>
    </div>
  </div>
);
export default FooterNav;
