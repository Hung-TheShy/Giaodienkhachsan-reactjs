import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free nước hoa quả",
        info:
          "khách sạn chúng tôi miễn phí tất cả các loại nước uống từ hoa quả!",
      },
      {
        icon: <FaHiking />,
        title: "đi bộ ",
        info:
          "Bạn có thể đi lại thoải mái trong khách sạn nếu bạn muốn!",
      },
      {
        icon: <FaShuttleVan />,
        title: "đưa đón free",
        info:
          "Khách sạn chúng tôi có dịch vụ đưa đón các bạn tận tình, đặc biệt là tất cả đều miễn phí!",
      },
      {
        icon: <FaBeer />,
        title: "đầy đủ các loại beer",
        info:
          "Bạn có thể thỏa sức gọi các loại beer , khách sạn chúng tôi không thiếu loại gì!",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="các loại dịch vụ" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
