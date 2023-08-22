import React, { Component } from "react";

import { Link } from "react-router-dom";

// import assets
import defaultBcg from "../assets/img/jpeg/single-vip1.jpg";

// import components
import Banner from "../Components/Banner/Banner";
import { RoomContext } from "../Context/Context";
import StyledHero from "../Components/StyledHero/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>không có phòng như thế</h3>
          <Link to="/rooms" className="btn-primary">
            trở về
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } =room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={` ${name}`}>
            <Link to="/rooms" className="btn-primary">
              trở về
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>Giới thiệu:</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>Thông tin:</h3>
              <h6>Giá : ${price}</h6>
              <h6>Kích thước : {size} m2</h6>
              <h6>
                Tối đa :{" "}
                {capacity > 1 ? `${capacity} người` : `${capacity} người`}
              </h6>
              <h6>{pets ? "cho phép nuôi thú cưng" : "không cho phép nuôi thú cưng"}</h6>
              <h6>{breakfast && "bao gồm gói miễn phí ăn sáng"}</h6>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>Chi tiết :</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> - {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
