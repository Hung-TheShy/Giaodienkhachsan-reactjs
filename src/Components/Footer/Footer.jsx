import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Anonymous Hotel | Đặt phòng khách sạn</h2>
      <p>
        &copy; <span>{year}</span> Anonymoushotel.com - Mọi thông tin chi tiết liên hệ {" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/emperor0409"
        >
          Nguyễn Văn Hùng
        </a>
      </p>
    </footer>
  );
}
