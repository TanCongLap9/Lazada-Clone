# Lazada Clone
Xây dựng lại trang Lazada bằng ReactJS + TailwindCSS.

## Demo
https://kwxns3-3000.csb.app

## Giới thiệu
Đây là dự án cá nhân, xây dựng lại trang web Lazada sử dụng công nghệ ReactJS và TailwindCSS.

[Lazada](https://lazada.vn) là một website thương mại điện tử theo mô hình C2C phân phối các sản phẩm thuộc đa dạng thể loại khác nhau.

## Cài đặt trên máy cá nhân
Nếu bạn muốn tải về và chạy dự án trên máy cá nhân, thực hiện theo các bước sau:

1. Cài NodeJS

   Tải NodeJS tại đây: https://nodejs.org/en

2. Chạy shell và đặt đường dẫn đang làm việc hiện tại

   Chạy `cmd` (Windows) hoặc `sh` (Linux) và sử dụng lệnh dưới đây để thay đổi đường dẫn đang làm việc hiện tại:
   ```
   cd /đường dẫn/đến/registry_react
   ```

3. Sao chép dự án vào máy cục bộ

   Tải dự án này bằng cách nhấn vào nút **Đoạn mã > Tải về ZIP**, hoặc nếu bạn thích Git, hãy thực thi lệnh Git này:
   ```
   git clone https://github.com/TanCongLap9/registry_react
   ```

4. Cài đặt phụ thuộc

   Chạy lệnh sau đây để cài đặt các phụ thuộc bắt buộc cho quy trình xây dựng:
   ```
   npm install
   ```
   
5. Xây dựng dự án
   
   Chạy lệnh sau đây để xây dựng dự án:
   ```
   npm run build
   ```

6. Cài đặt Máy chủ Sống

   Chạy lệnh này trong lời nhắc vỏ để thiết lập một máy chủ địa phương:
   ```
   npm install live-server -g
   ```

7. Bắt đầu một máy chủ địa phương trong thư mục `xây dựng`
   
   Sau khi cài đặt Máy chủ Sống, chạy lệnh này để bắt đầu một máy chủ địa phương:
   ```
   cd build
   live-server
   ```

## Thông tin về dự án
- Tên dự án: Lazada Clone
- Tác giả: TanCongLap9
- Ngôn ngữ lập trình: JavaScript
- Giấy phép: MIT
- Gói thư viện lệ thuộc: ReactJS, Babel, TailwindCSS, Concurrently