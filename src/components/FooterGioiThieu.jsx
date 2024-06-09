import React, { Fragment } from 'react';
import sanPhamChinhHang from '../data/sanPhamChinhHang.json';
import sanPhamNoiBatNames from '../data/sanPhamNoiBatNames.json';
import sanPhamNoiBat from '../data/sanPhamNoiBat.json';
import { arrayOf, bool, func, shape, string } from 'prop-types';

const CacSanPhamNoiBat = ({ predicate }) => (
  <>
    {sanPhamNoiBat.map((v, i) => predicate(v, i) && (
      <div key={i} className="my-3">
        <h6 className="uppercase font-bold">{v.name}</h6>
        <Links data={v.values} />
      </div>
    ))}
  </>
);

CacSanPhamNoiBat.propTypes = {
  predicate: func.isRequired
};

const Links = ({ data, blue }) => (
  <p>
    {data.map((v, i) => (
      <Fragment key={i}>
        {i !== 0 && ', '}
        <a
          href={v.href}
          className={`hover:underline ${blue && 'hover:decoration-sky-700'}`}
        >
          {v.name}
        </a>
      </Fragment>
    ))}
  </p>
);

Links.propTypes = {
  data: arrayOf(shape({ name: string, href: string })).isRequired,
  blue: bool
};

const GioiThieu = () => (
  <div className="py-8 bg-neutral-100">
    <div className="container max-w-screen-xl mx-auto flex flex-row">
      <div className="w-1/2 columns-2 gap-x-20 mr-20">
        <h4 className="uppercase">Lazada - Nền tảng mua sắm trực tuyến hàng đầu việt nam</h4>
        <p>Thành lập từ năm 2012, Lazada là nền tảng thương mại điện tử hàng đầu Đông Nam Á, tiên phong thúc đẩy sự phát triển tại khu vực thông qua Thương mại & Công nghệ. Hiện nay, với nền tảng logistics và hệ thống thanh toán lớn nhất khu vực, Lazada trở thành một phần trong đời sống của người tiêu dùng và hướng đến mục tiêu phục vụ cho 300 triệu khách hàng trên toàn khu vực Đông Nam Á vào năm 2030.</p>
        <p>Tại Việt Nam, Lazada là nền tảng Thương mại điện tử quen thuộc của hàng triệu người tiêu dùng bởi sự đa dạng hàng đầu về chủng loại sản phẩm, ứng dụng công nghệ mua sắm và giải trí thông minh cùng khả năng logistics mạnh mẽ và dịch vụ chăm sóc khách hàng tối ưu. Đáng chú ý, bên cạnh các chương trình ưu đãi trực tuyến hấp dẫn hàng tháng hấp dẫn thường xuyên, Lazada Việt Nam còn thu hút người dùng với các Lễ Hội Mua Sắm siêu lớn trong năm, đây được xem là các thời điểm mua sắm không thể bỏ lỡ của các tín đồ mua sắm trên toàn quốc.</p>
        <p>Hãy truy cập website hoặc tải ngay ứng dụng Lazada để gia tăng thêm nhiều trải nghiệm độc đáo cho hành trình mua sắm &#x2013; giải trí tuyệt vời và siêu tiết kiệm ngay hôm nay!</p>
        <h4 className="uppercase my-2">Sản phẩm chính hãng</h4>
        <Links data={sanPhamChinhHang} blue />
      </div>
      <div className="w-1/4 mr-20">
        <h4 className="uppercase">Sản phẩm nổi bật</h4>
        <CacSanPhamNoiBat predicate={(v, i) => i < 6} />
      </div>
      <div className="w-1/4 mr-20">
        <CacSanPhamNoiBat predicate={(v, i) => i >= 6} />
      </div>
    </div>
  </div>
);

export default GioiThieu;
