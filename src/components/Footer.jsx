import React from 'react';
import GioiThieu from './FooterGioiThieu';
import FooterNav from './FooterNav';
import FooterEnd from './FooterEnd';
import ahamove from '../static/footer/Ahamove_70.png';
import bestexpress from '../static/footer/BestExpress_70.png';
import ghnexpress from '../static/footer/GhnExpress_70.png';
import jtexpress from '../static/footer/JtExpress_70.png';
import grabexpress from '../static/footer/GrabExpress_70.png';
import lazadalog from '../static/footer/LazadaLogistics_70.png';
import ninjavan from '../static/footer/NinjaVan_70.png';
import chonghanggia from '../static/footer/chong_hang_gia.png';
import dadangky from '../static/footer/da_dang_ky.png';
import dadangky2 from '../static/footer/da_dang_ky_2.png';
import dathongbao from '../static/footer/da_thong_bao.png';
import isoiec from '../static/footer/iso_iec.png';
import pcidss from '../static/footer/pci_dss.png';
import heo from '../static/footer/heo.png';
import napas from '../static/footer/napas.png';
import zalopay from '../static/footer/zalopay.png';
import mastercard from '../static/footer/mastercard.png';
import momo from '../static/footer/momo.png';
import cashon from '../static/footer/cashon.png';
import visa from '../static/footer/visa.png';
import jcb from '../static/footer/jcb.png';

const Footer = () => (
  <footer>
    <div className="bg-neutral-100">
      <div className="container max-w-screen-xl mx-auto">
        <hr />
        <FooterNav />
      </div>
    </div>
    <div className="container max-w-screen-xl mx-auto flex flex-row my-8">
      <div className="w-1/3">
        <h4 className="uppercase text-lg leading-5">Cách thức thanh toán</h4>
        <div className="flex flex-row flex-wrap">
          <a href="/"><img src={visa} alt="Cách thức thanh toán" className="w-auto h-[39px] mb-3 mr-6" /></a>
          <a href="/"><img src={mastercard} alt="Cách thức thanh toán" className="w-auto h-[39px] mb-3 mr-6" /></a>
          <a href="/"><img src={jcb} alt="Cách thức thanh toán" className="w-auto h-[39px] mb-3 mr-6" /></a>
          <a href="/"><img src={cashon} alt="Cách thức thanh toán" className="w-auto h-[39px] mb-3 mr-6" /></a>
          <a href="/"><img src={napas} alt="Cách thức thanh toán" className="w-auto h-[39px] mb-3 mr-6" /></a>
          <a href="/"><img src={heo} alt="Cách thức thanh toán" className="w-auto h-[39px] mb-3 mr-6" /></a>
          <a href="/"><img src={zalopay} alt="Cách thức thanh toán" className="w-auto h-[39px] mb-3 mr-6" /></a>
          <a href="/"><img src={momo} alt="Cách thức thanh toán" className="w-auto h-[39px] mb-3 mr-6" /></a>
        </div>
      </div>
      <div className="w-1/3 ml-16">
        <h4 className="uppercase text-lg leading-5">Dịch vụ giao hàng</h4>
        <div className="flex flex-row flex-wrap">
          <a href="/"><img src={lazadalog} alt="Dịch vụ giao hàng" className="w-auto h-[70px] mr-2" /></a>
          <a href="/"><img src={ghnexpress} alt="Dịch vụ giao hàng" className="w-auto h-[70px] mr-2" /></a>
          <a href="/"><img src={ninjavan} alt="Dịch vụ giao hàng" className="w-auto h-[70px] mr-2" /></a>
          <a href="/"><img src={grabexpress} alt="Dịch vụ giao hàng" className="w-auto h-[70px] mr-2" /></a>
          <a href="/"><img src={bestexpress} alt="Dịch vụ giao hàng" className="w-auto h-[70px] mr-2" /></a>
          <a href="/"><img src={ahamove} alt="Dịch vụ giao hàng" className="w-auto h-[70px] mr-2" /></a>
          <a href="/"><img src={jtexpress} alt="Dịch vụ giao hàng" className="w-auto h-[70px] mr-2" /></a>
        </div>
      </div>
      <div className="w-1/3">
        <h4 className="uppercase text-lg leading-5">Chứng nhận</h4>
        <div className="flex flex-row">
          <div className="flex flex-col flex-wrap mr-4">
            <a href="/"><img src={pcidss} alt="Heo" className="w-auto h-[60px] mb-4" /></a>
            <a href="/"><img src={chonghanggia} alt="Heo" className="w-auto h-[80px] mb-4" /></a>
            <a href="/"><img src={isoiec} alt="Heo" className="w-auto h-[42px]" /></a>
          </div>
          <div className="flex flex-col flex-wrap">
            <a href="/"><img src={dadangky} alt="Heo" className="w-auto h-[40px] mb-4" /></a>
            <a href="/"><img src={dathongbao} alt="Heo" className="w-auto h-[40px] mb-4" /></a>
            <a href="/"><img src={dadangky2} alt="Heo" className="w-auto h-[40px]" /></a>
          </div>
        </div>
      </div>
    </div>
    <GioiThieu />
    <FooterEnd />
  </footer>
);

export default Footer;
