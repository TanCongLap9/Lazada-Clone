import React, { useState } from 'react';
import logo from '../static/header-logo.png';
import lazcard from '../static/lazcard.avif';
import headerBanner from '../static/header-banner.webp';

const TimKiem = () => (
  <div className="flex flex-row w-full max-w-full">
    <input
      type="text"
      placeholder="Tìm kiếm trên Lazada"
      className="placeholder-neutral-500 bg-slate-100 px-4 w-full"
    />
    <button
      type="button"
      className="bg-orange-600 text-white material-icons-outlined w-11 h-11"
    >
      search
    </button>
  </div>
);

const BannerKhuyenMai = () =>
{
  const [isClosed, setClosed] = useState(false);
  return !isClosed && (
    <div style={{ backgroundColor: 'rgb(77, 124, 246)' }}>
      <div className="container box-border max-w-screen-xl relative mx-auto">
        <img
          src={headerBanner}
          className="w-auto h-20 mx-auto"
          alt="Banner khuyến mãi"
        />
        <button
          type="button"
          className="material-icons-outlined
            absolute top-3 right-3
            text-white cursor-pointer"
          onClick={() => setClosed(true)}
        >
          close
        </button>
      </div>
    </div>
  );
};

const NavigationBar = () => (
  <div className="bg-neutral-100 pb-1">
    <div className="container box-border max-w-screen-xl
      flex flex-row justify-end
      mx-auto"
    >
      <a
        href="."
        className="text-xs hover:text-orange-600 uppercase ml-8 my-1"
      >
        Góp ý
      </a>
      <a
        href="."
        className="text-xs hover:text-orange-600 uppercase ml-8 my-1"
      >
        Tiết kiệm hơn với ứng dụng
      </a>
      <a
        href="."
        className="text-xs hover:text-orange-600 uppercase ml-8 my-1"
      >
        Bán hàng cùng Lazada
      </a>
      <a
        href="."
        className="text-xs hover:text-orange-600 uppercase ml-8 my-1"
      >
        Chăm sóc khách hàng
      </a>
      <a
        href="."
        className="text-xs hover:text-orange-600 uppercase ml-8 my-1"
      >
        Kiểm tra đơn hàng
      </a>
      <a
        href="."
        className="text-xs hover:text-orange-600 uppercase ml-8 my-1"
      >
        Đăng nhập
      </a>
      <a
        href="."
        className="text-xs hover:text-orange-600 uppercase ml-8 my-1"
      >
        Đăng ký
      </a>
      <a
        href="."
        className="text-xs hover:text-orange-600 uppercase ml-8 my-1"
      >
        Change language
      </a>
    </div>
  </div>
);

const GioHang = () => (
  <button
    type="button"
    className="material-icons-outlined material-icons-lg
      w-11 h-11 shrink-0 ml-10"
  >
    shopping_cart
  </button>
);

const Logo = () => (
  <a href="/" className="mr-20 shrink-0">
    <img src={logo} alt="Logo" className="w-auto h-10" />
  </a>
);

const Lazcard = () => (
  <a href="." className="ml-10 shrink-0">
    <img src={lazcard} alt="Lazcard" className="w-auto h-11" />
  </a>
);

const Header = () => (
  <header className="sticky top-0 z-50">
    <BannerKhuyenMai />
    <div>
      <NavigationBar />
      <div className="pt-2 pb-8 bg-white">
        <div className="container box-border max-w-screen-xl
          flex flex-row justify-between items-end
          mx-auto"
        >
          <Logo />
          <TimKiem />
          <GioHang />
          <Lazcard />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
