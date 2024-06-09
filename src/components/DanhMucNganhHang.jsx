import React from 'react';
import danhMucNganhHang from '../data/danhMucNganhHang.json';
import { object } from 'prop-types';

const DanhMucDanhHangItem = ({ data }) => (
  <a href="." className="flex flex-col items-center w-[12.5%] hover:shadow-lg hover:z-10 p-2 text-sm bg-white border border-neutral-100">
    <img src={data.image} alt="Hình" className="w-3/5 h-auto mb-3" />
    <h4 className="line-clamp-2 text-center text-sm">{ data.ten }</h4>
  </a>
);

DanhMucDanhHangItem.propTypes = {
  data: object.isRequired
};

const DanhMucNganhHangContainer = () => (
  <div className="container max-w-screen-xl mx-auto mb-12" id="hp-categories">
    <h3 className="text-2xl mb-2">Danh Mục Ngành Hàng</h3>
    <div className="flex flex-row flex-wrap">
      {danhMucNganhHang.map(
        (v, i) => <DanhMucDanhHangItem key={i} data={{ ten: v.name, image: v.src }} />
      )}
    </div>
  </div>
);

export default DanhMucNganhHangContainer;
