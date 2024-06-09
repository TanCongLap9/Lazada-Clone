import React from 'react';
import { object, arrayOf, any, number, string } from 'prop-types';

export const DealChopNhoangItem = ({ data, hide }) => (
  <div className="hover:shadow-lg hover:z-10 mr-3 last:mr-0 pb-4 w-1/6">
    <a href=".">
      <img src={data.hinh} alt="Sản phẩm" />
      <div className="px-2 py-1">
        <h4 className="leading-5 line-clamp-2 text-sm">{data.ten}</h4>
        <p className="text-lg text-orange-600">
          {`${Math.round(data.donGia * (1 - data.giamGia)).toLocaleString()} \u20ab`}
        </p>
        <div className="flex flex-row text-xs">
          <p className="text-neutral-400 line-through mr-1.5">{data.donGia.toLocaleString()} &#x20ab;</p>
          <p>-{Math.round(data.giamGia * 100)}%</p>
        </div>
      </div>
    </a>
  </div>
);

DealChopNhoangItem.propTypes = {
  data: object.isRequired,
  hide: arrayOf(string)
};

export const DanhRiengChoBanItem = ({ data }) => (
  <div className="pr-2 pb-5 w-1/6">
    <div className="hover:shadow-lg hover:z-10 bg-white pb-4">
      <a href=".">
        <img src={data.hinh} alt="Sản phẩm" className="w-full h-auto aspect-square" />
        <div className="px-2 py-1">
          <h4 className="leading-5 line-clamp-2 text-sm">{data.tenSp}</h4>
          <p className="text-lg text-orange-600">
            {`${Math.round(data.gia * (1 - data.giamGia)).toLocaleString()} \u20ab`}
          </p>
          <div className="flex flex-row text-xs">
            <p className="text-neutral-400 line-through mr-1.5">{data.gia.toLocaleString()} &#x20ab;</p>
            <p>-{Math.round(data.giamGia * 100)}%</p>
          </div>
          <div className="inline-block relative">
            {Array(5).fill(0).map(
              (v, i) => <span key={i} className="material-icons material-icons-xs text-neutral-400">star</span>
            )}
            <div className="w-[30%] inline-block overflow-hidden whitespace-nowrap absolute top-0 left-0">
              {Array(5).fill(0).map(
                (v, i) => <span key={i} className="material-icons material-icons-xs text-yellow-400">star</span>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
);

DanhRiengChoBanItem.propTypes = {
  data: object.isRequired
};
