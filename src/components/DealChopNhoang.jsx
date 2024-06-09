import React, { useEffect, useState } from 'react';
import { DealChopNhoangItem } from './Item';
import sanPham from '../data/sanPham.json';

const Countdown = () =>
{
  const [later, setLater] = useState(new Date());
  const [timeSpan, setTimeSpan] = useState(new Date(0));
  useEffect(() =>
  {
    const newFuture = new Date(later);
    newFuture.setDate(newFuture.getDate() + 2);
    setLater(later);
    const intervalId = setInterval(
      () => setTimeSpan(() => new Date(newFuture.getTime() - Date.now())),
      1000
    );
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-row items-center">
      <b className="inline-block bg-red-600 text-white w-10 py-1.5 text-center">
        {Math.floor(timeSpan.getTime() / 1000 / 60 / 60)}
      </b>
      <span className="mx-1.5">:</span>
      <b className="inline-block bg-red-600 text-white w-10 py-1.5 text-center">
        {timeSpan.getMinutes()}
      </b>
      <span className="mx-1.5">:</span>
      <b className="inline-block bg-red-600 text-white w-10 py-1.5 text-center">
        {timeSpan.getSeconds()}
      </b>
    </div>
  );
};

const DealChopNhoangContainer = () => {
  const sanPhamCoKhuyenMai = sanPham.filter(sp => sp.giamGia > 0);
  return (
    <div className="container max-w-screen-xl mx-auto mb-12" id="hp-flash-sale">
      <h3 className="text-2xl mb-2">Deal chớp nhoáng</h3>
      <div className="divide-y">
        <div className="flex flex-row bg-white p-3 items-center">
          <div className="flex flex-row items-center">
            <span className="text-orange-600 mr-16 px-4 text-sm">Đang bán</span>
            <span className="text-sm mr-3">Kết thúc trong</span>
            <Countdown />
          </div>
          <a href="." className="text-sm text-orange-600 border border-orange-600 uppercase px-3 py-2 ml-auto">
            Mua sắm toàn bộ sản phẩm
          </a>
        </div>
        <div className="flex flex-row bg-white p-2">
          {sanPhamCoKhuyenMai.slice(0, 6).map((v, i) => (
            <DealChopNhoangItem
              key={i}
              data={v}
              hide={['danhGia']}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealChopNhoangContainer;
