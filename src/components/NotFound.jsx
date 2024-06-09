import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() =>
  {
    document.title = 'Trang không tồn tại';
  }, []);
  return (
    <div>
      <header className="border-b flex flex-row justify-between py-1">
        <div>
          <a href="/" className="material-icons-outlined p-2 align-middle">arrow_back</a>
          <span className="align-middle">Trang không tìm thấy</span>
        </div>
        <div>
          <a href="#" className="material-icons-outlined p-2">search</a>
          <a href="#" className="material-icons-outlined p-2">shopping_cart</a>
        </div>
      </header>
      <div className="text-center">
        <img src="https://lzd-img-global.slatic.net/g/tps/tfs/TB13Sz0saNj0u4jSZFyXXXgMVXa-600-300.png" alt="Trang không tìm thấy" className="mx-auto" />
        <h1><b>Chúng tôi xin lỗi vì sự bất tiện này...</b></h1>
        <p className="text-neutral-400 text-lg">Trang bạn tìm không tồn tại. Vui lòng quay trở lại trang chủ.</p>
      </div>
    </div>
  );
};

export default NotFound;
