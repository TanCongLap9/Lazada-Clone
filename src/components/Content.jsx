// TODO: Tải thêm
import React, { useEffect, useState } from 'react';
import { number, object, objectOf, any, arrayOf, string } from 'prop-types';
import DealChopNhoangContainer from './DealChopNhoang';
import DanhRiengChoBanContainer from './DanhRiengChoBan';
import DanhMucNganhHangContainer from './DanhMucNganhHang';
import lazMall from '../data/lazMall.json';

import logo from '../static/content/slider/logo.webp';
import appstore from '../static/content/slider/appstore.png';
import google from '../static/content/slider/google.png';
import background from '../static/content/slider/background.png';
import voucher from '../static/content/slider/voucher.webp';
import vanchuyen from '../static/content/slider/vanchuyen.webp';
import maqr from '../static/content/slider/qr.webp';

import topup from '../static/content/3items/topup.webp';
import vouchers from '../static/content/3items/vouchers.webp';
import lazmall from '../static/content/3items/lazmall.webp';

const Slider = () =>
{
  const [current, setCurrent] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const [activate, setActivate] = useState(true);
  const INTERVAL = 5000;
  const data = [
    'https://img.lazcdn.com/us/domino/3c546fa95b29b702f63ca3b7ac62d949.jpg_2200x2200q80.jpg_.webp',
    'https://img.lazcdn.com/us/domino/6ed3ee9a9115c69c63a2fb16f605ed8f.jpg_2200x2200q80.jpg_.webp',
    'https://img.lazcdn.com/us/domino/fda22a32cc4d233c076e99bd869c6f3e.jpg_2200x2200q80.jpg_.webp',
    'https://img.lazcdn.com/us/domino/8886cd4d453416fbb1cff1926e75828f.jpg_2200x2200q80.jpg_.webp',
    'https://img.lazcdn.com/us/domino/c9ef92579bfaee8362fbbd12f1068e19.jpg_2200x2200q80.jpg_.webp',
    'https://img.lazcdn.com/us/domino/d299eb714d37c4cb2afa6139614cbddb.jpg_2200x2200q80.jpg_.webp',
    'https://img.lazcdn.com/us/domino/0f2bf8f9c7f5c5c7a85c8dc7bcf278c5.jpg_2200x2200q80.jpg_.webp',
    'https://img.lazcdn.com/us/domino/244e40493ab1491b0672ccf6fe24491b.jpg_2200x2200q80.jpg_.webp',
    'https://img.lazcdn.com/us/domino/af2ff9e4a3fcf719b570fab28a373a74.jpg_2200x2200q80.jpg_.webp',
    'https://img.lazcdn.com/us/domino/2d1c2aa900470539c0614857859bc126.jpg_2200x2200q80.jpg_.webp'
  ];
  function getColorClass(i)
  {
    return i === current ? 'text-white' : 'text-neutral-300';
  }
  useEffect(() =>
  {
    if (!activate)
    {
      clearInterval(intervalId);
      setIntervalId(undefined);
      return undefined;
    }
    if (intervalId !== undefined) return undefined;
    const intId = setInterval(
      () => setCurrent((cur) => (cur + 1) % data.length), INTERVAL
    );
    setIntervalId(intId);
    return () => clearInterval(intId);
  }, [activate]);
  return (
    <div
      className="relative h-full w-full mr-2"
      onMouseEnter={() => setActivate(false)}
      onMouseLeave={() => setActivate(true)}
    >
      <a href=".">
        <img src={data[current]} alt="Hình ảnh" className="w-full h-full" />
      </a>
      <div className="absolute bottom-1 left-1/2 mx-auto -translate-x-1/2">
        {data.map((v, i) => (
          <button
            key={v}
            type="button"
            className={`${getColorClass(i)}
              material-icons material-icons-xs
              cursor-pointer mx-1 center`}
            onMouseEnter={(e) => setCurrent(
              parseInt(e.target.dataset.index, 10)
            )}
            data-index={i}
          >
            circle
          </button>
        ))}
      </div>
    </div>
  );
};

const TTApp = () =>
{
  const stars = 4.7;
  return (
    <div
      style={{
        background: `
        linear-gradient(90deg,#fff,hsla(0,0%,100%,0)),
        linear-gradient(179.27deg,#ffedd6 .83%,#ffc3e3 46.78%,#fff 99.57%),
        linear-gradient(0deg,#fff,#fff)`
      }}
      className="w-48 px-1.5 pt-1.5 pb-4 shrink-0"
    >
      <div className="flex flex-row items-center mb-1.5">
        <img src={logo} alt="Logo" className="w-11 h-11 mr-2" />
        <p className="uppercase text-sm leading-5 line-clamp-2">
          <strong>Trải nghiệm Lazada ngay</strong>
        </p>
      </div>
      <div className="relative mb-1.5">
        <img src={background} alt="Background" />
        <div className="absolute top-0 left-0 text-white px-2 py-1.5">
          <p className="text-xs mb-1">
            <span
              className="material-icons material-icons-xs align-middle"
            >
              star
            </span>
            <span className="align-middle">
              {`${stars} Rated`}
            </span>
          </p>
          <p className="text-xs text-center mb-2">
            <b>Tải ngay app Lazada để tận hưởng</b>
          </p>
          <div className="flex flex-row items-center mb-1.5 w-10/12 mx-auto">
            <img src={vanchuyen} alt="Vận chuyển" className="w-9 h-9 mr-2" />
            <p className="uppercase text-sm leading-4 line-clamp-2">
              <strong>Miễn phí vận chuyển</strong>
            </p>
          </div>
          <div className="flex flex-row items-center mb-1.5 w-10/12 mx-auto">
            <img src={voucher} alt="Voucher" className="w-9 h-9 mr-2" />
            <p className="uppercase text-sm leading-4 line-clamp-2">
              <strong>Voucher độc quyền</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-1.5">
        <img src={maqr} alt="Mã QR" className="w-24 h-24 mr-2" />
        <div className="flex flex-col justify-center">
          <a href="." className="my-2">
            <img src={appstore} alt="App store" className="w-auto h-6" />
          </a>
          <a href="." className="my-2">
            <img src={google} alt="Google play" className="w-auto h-6" />
          </a>
        </div>
      </div>
      <p className="text-xs">Quét mã QR và tải app ngay</p>
    </div>
  );
};

const Items3 = () => (
  <div className="container max-w-screen-xl
    flex flex-row
    divide-x-2 bg-white rounded-xl py-3 mb-8 mx-auto"
  >
    <a href="." className="group w-1/3 pl-8">
      <img src={lazmall} alt="Hình ảnh" className="w-auto h-5" />
      <p className="text-sm text-neutral-400 group-hover:text-red-700">LazMall</p>
    </a>
    <a href="." className="group w-1/3 pl-8">
      <img src={vouchers} alt="Hình ảnh" className="w-auto h-5" />
      <p className="text-sm text-neutral-400 group-hover:text-orange-500">Mã Giảm Giá</p>
    </a>
    <a href="." className="group w-1/3 pl-8">
      <img src={topup} alt="Hình ảnh" className="w-auto h-5" />
      <p className="text-sm text-neutral-400 group-hover:text-cyan-300">
        Nạp thẻ &amp; eVoucher
      </p>
    </a>
  </div>
);

const LazMallItem = ({ data }) => (
  <a href="." className="hover:shadow-lg mr-3 hover:z-10 last:mr-0 relative bg-white w-1/6">
    <img src={ data.src } alt="Hình" className="aspect-square" />
    <div className="text-center pt-8 text-sm">
      <h5 className="mb-1">{ data.name }</h5>
      <p className="text-neutral-400 mb-2 text-xs">{ data.name2 }</p>
    </div>
    <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-12 h-12 shadow-md p-1 bg-white">
      <img src={ data.src2 } alt="Hình" />
    </div>
  </a>
);

const LazMallConainter = () => (
  <div className="container max-w-screen-xl mx-auto mb-12" id="hp-official-stores">
    <div className="flex flex-row justify-between items-center mb-2">
      <h3 className="text-2xl">LazMall</h3>
      <a href="." className="text-cyan-600">
        <span className="align-middle text-sm">Xem Thêm</span>
        <span className="material-icons align-middle">chevron_right</span>
      </a>
    </div>
    <div className="flex flex-row">
      {lazMall.map(
        (v, i) => <LazMallItem key={i} data={v} />
      )}
    </div>
  </div>
);

const Content = () => (
  <div className="bg-neutral-100">
    <div className="bg-slate-200 mb-2">
      <div className="container max-w-screen-xl
        flex flex-row
        mx-auto mb-3"
      >
        <Slider />
        <TTApp />
      </div>
    </div>
    <Items3 />
    <DealChopNhoangContainer />
    <LazMallConainter />
    <DanhMucNganhHangContainer />
    <DanhRiengChoBanContainer />
  </div>
);

export default Content;
