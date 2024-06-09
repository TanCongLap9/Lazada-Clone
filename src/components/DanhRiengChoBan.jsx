import React, { useState } from 'react';
import sanPham from '../data/sanPham.json';
import { DanhRiengChoBanItem } from './Item';

const DanhRiengChoBanContainer = () =>
{
  const [n, setN] = useState(20);
  const data = sanPham;
  return (
    <div className="container max-w-screen-xl mx-auto pb-2" id="hp-just-for-you">
      <h3 className="text-2xl mb-2">Dành Riêng Cho Bạn</h3>
      <div className="flex flex-row flex-wrap">
        {data.slice(0, n).map(
          (v, i) => (
            <DanhRiengChoBanItem
              key={i}
              data={{
                tenSp: v.ten,
                gia: v.donGia,
                giamGia: v.giamGia,
                hinh: v.hinh
              }}
              index={i}
            />
          )
        )}
      </div>
      <button
        type="button"
        className="block cursor-pointer
        text-cyan-600 border border-cyan-600
        uppercase text-sm w-96 py-2 mx-auto mt-6"
        onClick={() => setN(n + 20)}
      >
        Tải thêm
      </button>
    </div>
  );
};

export default DanhRiengChoBanContainer;
