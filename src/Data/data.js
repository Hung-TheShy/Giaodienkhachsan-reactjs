import room1 from "../assets/img/jpeg/single-vip1.jpg";
import room2 from "../assets/img/jpeg/single-vip2.jpg";
import room3 from "../assets/img/jpeg/double-vip1.jpg";
import room4 from "../assets/img/jpeg/family4.jpg";
import img1 from "../assets/img/jpeg/single1.jpg";
import img2 from "../assets/img/jpeg/single2.jpg";
import img3 from "../assets/img/jpeg/single3.jpg";
import img4 from "../assets/img/jpeg/doule-vip3.jpg";
import img5 from "../assets/img/jpeg/doule-tieuchuan2.jpg";
import img6 from "../assets/img/jpeg/doule-tieuchuan3.jpg";
import img7 from "../assets/img/jpeg/family4.jpg";
import img8 from "../assets/img/jpeg/family2.jpg";
import img9 from "../assets/img/jpeg/family3.jpg";
import img10 from "../assets/img/jpeg/tongthong3.jpg";
import img11 from "../assets/img/jpeg/tongthong1.jpg";
import img12 from "../assets/img/jpeg/tongthong2.jpg"; 
const data = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: " phòng đơn giá rẻ ",
      slug: "single-economy",
      type: "đơn",
      price: 100,
      size: 20,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Phòng Đơn Giá Rẻ tại Khách sạn là lựa chọn hoàn hảo cho các du khách muốn có một nơi dừng chân thoải mái, đẹp mắt và tiết kiệm. Với diện tích khoảng 20m², phòng được thiết kế hiện đại và tiện nghi đảm bảo sự thoải mái tối đa cho bạn.",
      extras: [
        "Giường: Một giường đơn thoải mái với chăn mềm mại và gối êm ái để bạn có giấc ngủ ngon.",
        "Tiện nghi làm đẹp: Phòng tắm riêng với bồn tắm hoặc vòi sen, đèn trang điểm, gương to, và các sản phẩm chăm sóc cá nhân chất lượng cao.",
        "Tiện nghi làm việc: Bàn làm việc thoải mái và ghế để bạn làm việc hoặc sử dụng laptop.",
        "Giải trí: Truy cập Internet tốc độ cao miễn phí qua Wi-Fi, TV màn hình phẳng với các kênh truyền hình cáp.",
        "Tiện nghi pha trà và cà phê: Máy pha trà và cà phê để bạn tự do thư giãn và thưởng thức những ly thức uống ấm áp.",
        "Minibar: Tủ lạnh nhỏ với một số thức uống và đồ ăn nhẹ để bạn cảm thấy thoải mái và tiện lợi.",
      ],
      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "phòng đơn phổ biến",
      slug: "single-basic",
      type: "đơn",
      price: 150,
      size: 25,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Phòng Single Basic tại Khách sạn Serene được thiết kế với sự đơn giản và thoải mái. Với diện tích khoảng 25m², phòng mang lại không gian riêng tư và ấm cúng, là lựa chọn tốt cho những người độc thân hoặc du khách muốn tiết kiệm chi phí lưu trú. Phòng đơn cơ bản của chúng tôi là sự kết hợp hoàn hảo giữa sự thoải mái và tính tiết kiệm. Đây là lựa chọn phù hợp cho những ai tìm kiếm một không gian yên tĩnh và tiện nghi đơn giản trong hành trình của mình. Hãy đặt phòng ngay hôm nay để trải nghiệm sự ấm áp và dịch vụ tận tâm tại Khách sạn chúng tôi!",
      extras: [
        "Giường: Một giường đơn thoải mái với chăn ấm và gối êm để bạn có giấc ngủ ngon.",
        "Phòng tắm: Phòng tắm riêng với vòi sen, lavabo và gương.",
        "Bàn làm việc: Một bàn làm việc tiện lợi để bạn có thể làm việc hoặc sử dụng laptop.",
        "Giải trí: Truy cập Internet tốc độ cao miễn phí qua Wi-Fi và TV màn hình phẳng với các kênh truyền hình cơ bản.",
        "Dịch vụ pha trà và cà phê: Máy pha trà và cà phê để bạn thư giãn và tận hưởng những khoảnh khắc yên tĩnh.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng thân thiện sẽ dọn dẹp phòng hàng ngày để đảm bảo sự sạch sẽ và thoải mái cho bạn.",
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "phòng đơn tiêu chuẩn",
      slug: "single-standard",
      type: "đơn",
      price: 250,
      size: 30,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Phòng đơn tiêu chuẩn tại Khách sạn chúng tôi được thiết kế để mang lại sự thoải mái và tiện nghi cho du khách độc thân hoặc những người muốn trải nghiệm lưu trú đơn giản và tốt giá trị. Với diện tích khoảng 30m², phòng mang đến không gian riêng tư và thoải mái cho bạn. Phòng đơn tiêu chuẩn tại Khách sạn chúng tôi mang đến sự kết hợp hoàn hảo giữa sự thoải mái và tiện nghi với mức giá hợp lý. Đây là lựa chọn tuyệt vời cho những người muốn trải nghiệm một không gian ấm cúng và chất lượng trong hành trình của mình. Hãy đặt ngay để trải nghiệm không gian thoải mái và dịch vụ tốt tại Khách sạn!",
      extras: [
        "Giường: Một giường đơn hoặc giường twin thoải mái với chăn mềm và gối êm để bạn có giấc ngủ ngon.",
        "Phòng tắm: Phòng tắm riêng với vòi sen hoặc bồn tắm, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cơ bản.",
        "Khu vực làm việc: Góc làm việc tiện lợi với bàn làm việc và ghế để bạn có thể làm việc hiệu quả hoặc thư giãn.",
        "Giải trí: Truy cập Internet Wi-Fi miễn phí, TV màn hình phẳng với các kênh truyền hình phong phú để bạn giải trí.",
        "Góc pha trà và cà phê: Máy pha trà và cà phê để bạn thư giãn và tận hưởng những khoảnh khắc yên tĩnh.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng tận tâm sẽ dọn dẹp phòng hàng ngày và cung cấp các tiện nghi để bạn có một trải nghiệm thoải mái nhất.",
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "phòng đơn sang trọng",
      slug: "single-deluxe",
      type: "đơn",
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Phòng đơn sang trọng tại Khách sạn chúng tôi được thiết kế với sự tinh tế và sang trọng, mang đến không gian nghỉ ngơi tối ưu cho du khách độc thân hoặc những người tìm kiếm trải nghiệm lưu trú cao cấp. Với diện tích rộng rãi khoảng 30-35m², phòng mang lại không gian riêng tư và thoải mái đích thực. Phòng đơn sang trọng tại Khách sạn chúng tôi là sự kết hợp hoàn hảo giữa không gian tiện nghi và dịch vụ tốt nhất. Đây là lựa chọn không thể tốt hơn cho những ai tìm kiếm trải nghiệm lưu trú đẳng cấp và sang trọng. Hãy đặt phòng ngay để trải nghiệm sự tinh tế và dịch vụ đỉnh cao tại Khách sạn chúng tôi!",
      extras: [
        "Giường: Một giường đơn hoặc giường twin siêu thoải mái với chăn mềm mại và gối êm ái để bạn có giấc ngủ đắm say.",
        "Phòng tắm: Phòng tắm sang trọng với bồn tắm riêng hoặc vòi sen, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cao cấp.",
        "Khu vực làm việc: Góc làm việc tinh tế với bàn làm việc chất lượng và ghế êm ái để bạn có thể làm việc hiệu quả.",
        "Giải trí: Truy cập Internet Wi-Fi tốc độ cao miễn phí, TV màn hình phẳng với hệ thống âm thanh đẳng cấp để bạn thư giãn hoàn hảo.",
        "Góc pha trà và cà phê: Góc pha trà và cà phê riêng biệt, với máy pha đa dạng để bạn thưởng thức những loại thức uống yêu thích.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng chuyên nghiệp sẽ thực hiện dọn dẹp phòng hàng ngày, đảm bảo mọi thứ luôn sạch sẽ và tinh tươm.",
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "phòng đôi giá rẻ",
      slug: "double-economy",
      type: "đôi",
      price: 200,
      size: 30,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Phòng Đôi Giá Rẻ tại Khách sạn chúng tôi là sự kết hợp hoàn hảo giữa tiết kiệm và thoải mái. Với diện tích khoảng 30m², phòng mang đến không gian ấm cúng và đầy chất đôi, phù hợp cho các cặp đôi hoặc du khách muốn tiết kiệm chi phí lưu trú.",
      extras: [
        "Giường: Một giường đôi thoải mái với chăn ấm và gối êm ái để bạn có giấc ngủ ngon",
        "Phòng tắm: Phòng tắm riêng với vòi sen, lavabo và gương",
        "Khu vực nghỉ ngơi: Khu vực nhỏ với ghế hoặc bàn nhỏ để bạn có không gian thư giãn và trò chuyện.",
        "Giải trí: Truy cập Internet Wi-Fi tốc độ cao miễn phí, TV màn hình phẳng với các kênh truyền hình cơ bản để bạn giải trí.",
        "Góc pha trà và cà phê: Máy pha trà và cà phê để bạn thư giãn và thưởng thức những khoảnh khắc yên bình.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng thân thiện sẽ dọn dẹp phòng hàng ngày để đảm bảo không gian luôn sạch sẽ và thoải mái cho bạn.",
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "phòng đôi phổ biến",
      slug: "double-basic",
      type: "đôi",
      price: 250,
      size: 35,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Phòng đôi Phổ Biến tại Khách sạn chúng tôi là lựa chọn ưa thích của nhiều du khách, với thiết kế hiện đại và không gian thoải mái. Với diện tích khoảng 20-25m², phòng mang đến không gian riêng tư và tiện ích cho một trải nghiệm lưu trú thoải mái.Phòng Đơn Phổ Biến tại Khách sạn Serenity là sự kết hợp hoàn hảo giữa thoải mái và tiện nghi. Đây là lựa chọn phù hợp cho mọi loại du khách, từ người thường xuyên đi công tác đến du khách tham quan. Hãy đặt ngay để trải nghiệm sự ấm áp và dịch vụ chất lượng tại Khách sạn chúng tôi!",
      extras: [
        "Giường: Một giường đôi hoặc giường twin thoải mái với chăn mềm và gối êm ái để bạn có giấc ngủ ngon.",
        "Phòng tắm: Phòng tắm riêng với vòi sen hoặc bồn tắm, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cơ bản.",
        "Khu vực nghỉ ngơi: Khu vực nhỏ với ghế hoặc bàn nhỏ để bạn có không gian thư giãn và tận hưởng thời gian chất lượng cùng đối tác.",
        "Giải trí: Truy cập Internet Wi-Fi tốc độ cao miễn phí, TV màn hình phẳng với các kênh truyền hình phổ biến để bạn giải trí.",
        "Góc pha trà và cà phê: Máy pha trà và cà phê để bạn thư giãn và tận hưởng những khoảnh khắc yên bình.",
        "Bữa sáng: Bữa sáng tự chọn đa dạng và thực đơn đặc sắc sẽ được phục vụ tại nhà hàng, đảm bảo bạn có một bắt đầu tốt cho ngày mới.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng thân thiện sẽ dọn dẹp phòng hàng ngày để đảm bảo không gian luôn sạch sẽ và tiện nghi cho bạn.",
      ],
      images: [
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
      name: "phòng đôi tiêu chuẩn",
      slug: "double-standard",
      type: "đôi",
      price: 300,
      size: 40,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Phòng Đôi Tiêu Chuẩn tại Khách sạn chúng tôi mang đến không gian thoải mái và tiện nghi đáng giá cho một trải nghiệm lưu trú thú vị. Với diện tích khoảng 40m², phòng được thiết kế một cách tiết kiệm và thoải mái, là lựa chọn hoàn hảo cho cặp đôi và du khách. Phòng Đôi Tiêu Chuẩn tại Khách sạn chúng tôi là sự kết hợp hài hòa giữa không gian thoải mái và tiện nghi tốt. Đây là lựa chọn tuyệt vời để tận hưởng kỳ nghỉ ấm áp và dễ chịu. Hãy đặt phòng ngay để trải nghiệm không gian ấn tượng và dịch vụ chuyên nghiệp tại Khách sạn chúng tôi !",
      extras: [
        "Giường: Một giường đôi hoặc giường twin thoải mái với chăn ấm và gối êm ái để bạn có giấc ngủ ngon",
        "Phòng tắm: Phòng tắm riêng với vòi sen, lavabo và gương. Các sản phẩm chăm sóc cá nhân cơ bản đã được chuẩn bị sẵn.",
        "Khu vực nghỉ ngơi: Góc nhỏ với ghế hoặc bàn nhỏ để bạn có không gian thư giãn và thư tịch riêng.",
        "Giải trí: Truy cập Internet Wi-Fi tốc độ cao miễn phí, TV màn hình phẳng với các kênh truyền hình phổ biến để bạn giải trí.",
        "Góc pha trà và cà phê: Máy pha trà và cà phê để bạn thư giãn và thưởng thức những khoảnh khắc yên tĩnh.",
        "Bữa sáng: Bữa sáng đơn giản và ngon miệng sẽ được phục vụ tại nhà hàng hoặc khu vực phục vụ bữa sáng.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng thân thiện sẽ dọn dẹp phòng hàng ngày để đảm bảo không gian luôn sạch sẽ và tiện nghi cho bạn.",
      ],
      images: [
        {
          fields: {
            file: {
              url: img7,
            },
          },
        },
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      name: "phòng đôi sang trọng",
      slug: "double-deluxe",
      type: "đôi",
      price: 400,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Phòng Đôi Phổ Biến tại Khách sạn chúng tôi là lựa chọn ưa thích của nhiều cặp đôi và du khách muốn trải nghiệm không gian chất lượng. Với diện tích khoảng 35m², phòng mang đến không gian riêng tư và thoải mái, hoàn hảo cho những kỳ nghỉ lãng mạn hay dịp nghỉ cuối tuần.  Phòng Đôi Phổ Biến tại Khách sạn chúng tôi là lựa chọn tuyệt vời để tận hưởng kỳ nghỉ thoải mái và ấm áp cùng người thân yêu. Hãy đặt ngay để trải nghiệm không gian sang trọng và dịch vụ tận tâm tại Khách sạn chúng tôi!",
      extras: [
        "Giường: Một giường đôi hoặc giường twin thoải mái với chăn mềm và gối êm ái để bạn có giấc ngủ ngon.",
        "Phòng tắm: Phòng tắm riêng với vòi sen hoặc bồn tắm, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cơ bản.",
        "Khu vực nghỉ ngơi: Khu vực nhỏ với ghế hoặc bàn nhỏ để bạn có không gian thư giãn và tận hưởng thời gian chất lượng cùng đối tác.",
        "Giải trí: Truy cập Internet Wi-Fi tốc độ cao miễn phí, TV màn hình phẳng với các kênh truyền hình phổ biến để bạn giải trí.",
        "Góc pha trà và cà phê: Máy pha trà và cà phê để bạn thư giãn và tận hưởng những khoảnh khắc yên bình.",
        "Bữa sáng: Bữa sáng tự chọn đa dạng và thực đơn đặc sắc sẽ được phục vụ tại nhà hàng, đảm bảo bạn có một bắt đầu tốt cho ngày mới.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng thân thiện sẽ dọn dẹp phòng hàng ngày để đảm bảo không gian luôn sạch sẽ và tiện nghi cho bạn.",
      ],
      images: [
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
      name: "phòng gia đình giá rẻ",
      slug: "family-economy",
      type: "gia đình",
      price: 300,
      size:  50,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Phòng Gia Đình Giá Rẻ tại Khách sạn chúng tôi được thiết kế để mang đến sự thoải mái và tiện ích cho gia đình hoặc nhóm bạn đang tìm kiếm một lựa chọn lưu trú tiết kiệm. Với diện tích khoảng 45-50², phòng mang lại không gian riêng tư và tiện lợi cho bạn và người thân yêu. Phòng Gia Đình Giá Rẻ tại Khách sạn chúng tôi là sự kết hợp hài hòa giữa tiết kiệm và tiện ích. Đây là lựa chọn lý tưởng cho gia đình hoặc nhóm bạn muốn cùng nhau tận hưởng kỳ nghỉ vui vẻ mà không cần phải tốn quá nhiều. Hãy đặt phòng ngay để trải nghiệm không gian thoải mái và dịch vụ thân thiện tại Khách sạn chúng tôi!",
      extras: [
        "Giường: Một hoặc hai giường đơn hoặc giường twin thoải mái với chăn ấm và gối êm ái để bạn và gia đình có giấc ngủ ngon.",
        "Phòng tắm: Phòng tắm riêng với vòi sen, lavabo và gương. Các sản phẩm chăm sóc cá nhân cơ bản đã được chuẩn bị sẵn.",
        "Khu vực nghỉ ngơi: Góc ghế hoặc ghế sofa thoải mái để gia đình có không gian thư giãn và trò chuyện.",
        "Giải trí: Truy cập Internet Wi-Fi miễn phí, TV màn hình phẳng với các kênh truyền hình cơ bản để bạn và gia đình giải trí.",
        "Góc pha trà và cà phê: Máy pha trà và cà phê để bạn thư giãn và tận hưởng những khoảnh khắc yên bình.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng thân thiện sẽ dọn dẹp phòng hàng ngày để đảm bảo không gian luôn sạch sẽ và tiện nghi cho bạn và gia đình.",
      ],
      images: [
        {
          fields: {
            file: {
              url: img9,
            },
          },
        },
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "10",
    },
    fields: {
      name: "phòng gia đình phổ biến",
      slug: "family-basic",
      type: "gia đình",
      price: 350,
      size: 55,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Phòng Gia Đình Phổ Biến Nhất tại Khách sạn chúng tôi là lựa chọn ưu tiên của nhiều gia đình, với thiết kế thoải mái và không gian rộng rãi. Với diện tích khoảng 55m² hoặc hơn, phòng mang đến không gian riêng tư và tiện ích cho bạn và gia đình. Phòng Gia Đình Phổ Biến Nhất tại Khách sạn chúng tôi là sự kết hợp tốt nhất giữa không gian rộng rãi và tiện nghi cao cấp. Đây là lựa chọn lý tưởng để tận hưởng kỳ nghỉ vui vẻ và ấm áp cùng gia đình. Hãy đặt phòng ngay để trải nghiệm không gian thoải mái và dịch vụ tận tâm tại Khách sạn chúng tôi!",
      extras: [
        "Giường: Một hoặc hai giường đôi hoặc giường twin thoải mái với chăn ấm và gối êm ái để bạn và gia đình có giấc ngủ ngon.",
        "Phòng tắm: Phòng tắm riêng với vòi sen hoặc bồn tắm, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cơ bản đã được chuẩn bị sẵn.",
        "Khu vực nghỉ ngơi: Góc ghế hoặc ghế sofa thoải mái để gia đình có không gian thư giãn và trò chuyện.",
        "Giải trí: Truy cập Internet Wi-Fi miễn phí, TV màn hình phẳng với các kênh truyền hình phổ biến để bạn và gia đình giải trí.",
        "Góc pha trà và cà phê: Máy pha trà và cà phê để bạn thư giãn và tận hưởng những khoảnh khắc yên tĩnh.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng thân thiện sẽ dọn dẹp phòng hàng ngày để đảm bảo không gian luôn sạch sẽ và tiện nghi cho bạn và gia đình.",
      ],
      images: [
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "11",
    },
    fields: {
      name: "Phòng gia đình tiêu chuẩn",
      slug: "family-standard",
      type: "gia đình",
      price: 400,
      size: 60,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Phòng Gia Đình Tiêu Chuẩn  tại Khách sạn chúng tôi là sự kết hợp hoàn hảo giữa không gian rộng rãi và tiện ích đẳng cấp. Với diện tích khoảng 60m² hoặc hơn, phòng mang đến không gian riêng tư và thoải mái cho bạn và gia đình . Phòng Gia Đình Tiêu Chuẩn  tại Khách sạn chúng tôi là sự lựa chọn tối ưu cho những gia đình muốn trải nghiệm không gian tiện nghi và dịch vụ tốt nhất. Hãy đặt ngay để tận hưởng một kỳ nghỉ đáng nhớ cùng với gia đình tại Khách sạn chúng tôi!",
      extras: [
        "Giường: Hai giường đôi hoặc giường king-size thoải mái với chăn ấm và gối êm ái để bạn và gia đình có giấc ngủ ngon.",
        "Phòng tắm: Phòng tắm riêng với vòi sen hoặc bồn tắm, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cao cấp.",
        "Khu vực nghỉ ngơi: Góc ghế hoặc ghế sofa thoải mái để gia đình có không gian thư giãn và trò chuyện.",
        "Khu vực làm việc: Bàn làm việc rộng rãi và ghế để bạn có thể làm việc hoặc sử dụng laptop.",
        "Giải trí: Truy cập Internet Wi-Fi tốc độ cao miễn phí, TV màn hình phẳng với các kênh truyền hình quốc tế để bạn và gia đình giải trí.",
        "Góc pha trà và cà phê: Góc pha trà và cà phê để bạn thư giãn và tận hưởng những khoảnh khắc yên bình.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng chuyên nghiệp sẽ dọn dẹp phòng hàng ngày và cung cấp các tiện nghi cao cấp để bạn và gia đình có một trải nghiệm không gian tốt nhất.",
      ],
      images: [
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
        {
          fields: {
            file: {
              url: img9,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "12",
    },
    fields: {
      name: "phòng gia đình sang trọng",
      slug: "family-deluxe",
      type: "gia đình",
      price: 500,
      size: 70,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Phòng Gia Đình Sang Trọng tại Khách sạn chúng tôi mang đến không gian xa hoa và tiện ích đẳng cấp cho bạn và gia đình. Với diện tích khoảng 50-60m² hoặc hơn, phòng mang đến không gian riêng tư và tiện nghi đỉnh cao. Phòng Gia Đình Sang Trọng tại Khách sạn là sự lựa chọn hoàn hảo cho những gia đình muốn trải nghiệm không gian lưu trú đỉnh cao và dịch vụ tận tâm. Hãy đặt ngay để tận hưởng kỳ nghỉ xa hoa và thăng hoa cùng gia đình tại Khách sạn chúng tôi!",
      extras: [
        "Giường: Hai giường đôi hoặc giường king-size siêu thoải mái với chăn ấm và gối êm ái để bạn và gia đình có giấc ngủ thảnh thơi như trong cõi mơ.",
        "Phòng tắm: Phòng tắm riêng biệt với bồn tắm hoặc vòi sen cao cấp, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cao cấp.",
        "Khu vực nghỉ ngơi: Khu vực nghỉ ngơi riêng biệt với ghế sofa sang trọng để bạn và gia đình có không gian thư giãn và trò chuyện.",
        "Khu vực làm việc: Bàn làm việc rộng rãi và ghế để bạn có thể làm việc hiệu quả hoặc thư giãn.",
        "Giải trí: Truy cập Internet Wi-Fi tốc độ cao miễn phí, TV màn hình phẳng siêu lớn với các kênh truyền hình quốc tế để bạn và gia đình giải trí tối đa.",
        "Góc pha trà và cà phê: Góc pha trà và cà phê cao cấp để bạn thư giãn và tận hưởng thời gian riêng tư.",
        "Bữa sáng: Bữa sáng đa dạng và tinh tế sẽ được phục vụ tại nhà hàng hoặc khu vực phục vụ bữa sáng, giúp bạn và gia đình có sự khởi đầu tốt cho ngày mới.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng chuyên nghiệp sẽ dọn dẹp phòng hàng ngày và cung cấp các tiện nghi cao cấp để bạn và gia đình có một trải nghiệm không gian sang trọng tối đa.",
        "Lễ tân 24/7: Lễ tân luôn sẵn sàng hỗ trợ bạn với mọi yêu cầu và thắc mắc trong suốt thời gian lưu trú của bạn và gia đình.",
      ],
      images: [
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
        {
          fields: {
            file: {
              url: img7,
            },
          },
        },
        {
          fields: {
            file: {
              url: img9,
            },
          },
        },
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "13",
    },
    fields: {
      name: "phòng tổng thống",
      slug: "presidential-room",
      type: "tổng thống",
      price: 600,
      size: 100,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Phòng Tổng Thống tại Khách sạn chúng tôi là biểu tượng của sự xa hoa và thượng lưu. Với diện tích rộng rãi từ 100m² hoặc hơn, phòng đem đến không gian đỉnh cao của sự sang trọng và riêng tư. Phòng Tổng Thống tại Khách sạn chúng tôi là không gian của sự hoàn hảo và sang trọng tột đỉnh, phù hợp cho những vị khách đặc biệt. Hãy đặt ngay để trải nghiệm không gian không giới hạn và dịch vụ ưu đãi tại Khách sạn !",
      extras: [
        "Giường: Giường King-size hoặc giường Siêu King-size đẳng cấp với các loại chăn và gối cao cấp, đảm bảo giấc ngủ thoải mái nhất.",
        "Phòng tắm: Phòng tắm hoàn hảo với bồn tắm sang trọng, vòi sen đa chức năng, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cao cấp.",
        "Phòng khách riêng: Phòng khách rộng rãi với bộ ghế sofa, bàn và không gian để tiếp đón khách mời.",
        "Khu vực làm việc: Góc làm việc tinh tế với bàn và ghế thoải mái để làm việc hoặc họp",
        "Giải trí: TV màn hình phẳng siêu lớn với các kênh truyền hình quốc tế, hệ thống âm thanh cao cấp và thiết bị giải trí đa phương tiện.",
        "Góc pha trà và cà phê: Góc pha trà và cà phê cao cấp để thư giãn và tận hưởng những khoảnh khắc thư thái.",
        "Bữa sáng: Bữa sáng tinh tế và đa dạng được phục vụ tại nhà hàng hoặc phòng.",
        "Dịch vụ phòng 24/7: Đội ngũ dịch vụ phòng chuyên nghiệp luôn sẵn sàng đáp ứng mọi yêu cầu của bạn.",
        "Dịch vụ hướng dẫn tham quan: Dịch vụ hướng dẫn tham quan cá nhân, chuyên nghiệp để bạn khám phá địa điểm và văn hóa địa phương.",
      ],
      images: [
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
        {
          fields: {
            file: {
              url: img11,
            },
          },
        },
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "14",
    },
    fields: {
      name: "phòng đơn vip",
      slug: "single-vip",
      type: " đơn vip ",
      price: 500,
      size: 35,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Phòng Đơn VIP tại Khách sạn  là sự kết hợp hoàn hảo giữa không gian tối giản và tiện nghi đẳng cấp. Với diện tích khoảng 35m², phòng mang đến không gian riêng tư và sang trọng cho bạn. Phòng Đơn VIP tại Khách sạn chúng tôi là sự lựa chọn tuyệt vời để trải nghiệm không gian sang trọng và dịch vụ tận tâm. Hãy đặt ngay để thư giãn trong không gian đẳng cấp và chất lượng tại Khách sạn !",
      extras: [
        "Giường: Giường King-size hoặc giường Queen-size với chăn ấm và gối êm ái, đảm bảo giấc ngủ trọn vẹn.",
        "Phòng tắm: Phòng tắm riêng biệt với bồn tắm hoặc vòi sen cao cấp, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cao cấp.",
        "Khu vực nghỉ ngơi: Khu vực nghỉ ngơi riêng biệt với ghế sofa sang trọng để bạn và gia đình có không gian thư giãn và trò chuyện.",
        "Khu vực làm việc: Bàn làm việc rộng rãi và ghế để bạn có thể làm việc hiệu quả hoặc thư giãn.",
        "Giải trí: Truy cập Internet Wi-Fi tốc độ cao miễn phí, TV màn hình phẳng siêu lớn với các kênh truyền hình quốc tế để bạn và gia đình giải trí tối đa.",
        "Góc pha trà và cà phê: Góc pha trà và cà phê cao cấp để bạn thư giãn và tận hưởng thời gian riêng tư.",
        "Bữa sáng: Bữa sáng đa dạng và tinh tế sẽ được phục vụ tại nhà hàng hoặc khu vực phục vụ bữa sáng, giúp bạn và gia đình có sự khởi đầu tốt cho ngày mới.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng chuyên nghiệp sẽ dọn dẹp phòng hàng ngày và cung cấp các tiện nghi cao cấp để bạn và gia đình có một trải nghiệm không gian sang trọng tối đa.",
        "Lễ tân 24/7: Lễ tân luôn sẵn sàng hỗ trợ bạn với mọi yêu cầu và thắc mắc trong suốt thời gian lưu trú của bạn và gia đình.",
      ],
      images: [
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "15",
    },
    fields: {
      name: "phòng đôi vip",
      slug: "double-vip",
      type: " đôi vip",
      price: 500,
      size: 50,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Phòng Đôi VIP tại Khách sạn  là sự kết hợp hoàn hảo giữa không gian tối giản và tiện nghi đẳng cấp. Với diện tích khoảng 35m², phòng mang đến không gian riêng tư và sang trọng cho bạn. Phòng Đơn VIP tại Khách sạn chúng tôi là sự lựa chọn tuyệt vời để trải nghiệm không gian sang trọng và dịch vụ tận tâm. Hãy đặt ngay để thư giãn trong không gian đẳng cấp và chất lượng tại Khách sạn !",
      extras: [
        "Giường: Giường King-size hoặc giường Queen-size với chăn ấm và gối êm ái, đảm bảo giấc ngủ trọn vẹn.",
        "Phòng tắm: Phòng tắm riêng biệt với bồn tắm hoặc vòi sen cao cấp, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cao cấp.",
        "Khu vực nghỉ ngơi: Khu vực nghỉ ngơi riêng biệt với ghế sofa sang trọng để bạn và gia đình có không gian thư giãn và trò chuyện.",
        "Khu vực làm việc: Bàn làm việc rộng rãi và ghế để bạn có thể làm việc hiệu quả hoặc thư giãn.",
        "Giải trí: Truy cập Internet Wi-Fi tốc độ cao miễn phí, TV màn hình phẳng siêu lớn với các kênh truyền hình quốc tế để bạn và gia đình giải trí tối đa.",
        "Góc pha trà và cà phê: Góc pha trà và cà phê cao cấp để bạn thư giãn và tận hưởng thời gian riêng tư.",
        "Bữa sáng: Bữa sáng đa dạng và tinh tế sẽ được phục vụ tại nhà hàng hoặc khu vực phục vụ bữa sáng, giúp bạn và gia đình có sự khởi đầu tốt cho ngày mới.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng chuyên nghiệp sẽ dọn dẹp phòng hàng ngày và cung cấp các tiện nghi cao cấp để bạn và gia đình có một trải nghiệm không gian sang trọng tối đa.",
        "Lễ tân 24/7: Lễ tân luôn sẵn sàng hỗ trợ bạn với mọi yêu cầu và thắc mắc trong suốt thời gian lưu trú của bạn và gia đình.",
      ],
      images: [
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
        {
          fields: {
            file: {
              url: img11,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "16",
    },
    fields: {
      name: "phòng gia đình vip",
      slug: "family-vip",
      type: "gia đình vip ",
      price: 500,
      size: 70,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Phòng Đơn VIP tại Khách sạn  là sự kết hợp hoàn hảo giữa không gian tối giản và tiện nghi đẳng cấp. Với diện tích khoảng 35m², phòng mang đến không gian riêng tư và sang trọng cho bạn. Phòng Đơn VIP tại Khách sạn chúng tôi là sự lựa chọn tuyệt vời để trải nghiệm không gian sang trọng và dịch vụ tận tâm. Hãy đặt ngay để thư giãn trong không gian đẳng cấp và chất lượng tại Khách sạn !",
      extras: [
        "Giường: Giường King-size hoặc giường Queen-size với chăn ấm và gối êm ái, đảm bảo giấc ngủ trọn vẹn.",
        "Phòng tắm: Phòng tắm riêng biệt với bồn tắm hoặc vòi sen cao cấp, đèn trang điểm, gương lớn và các sản phẩm chăm sóc cá nhân cao cấp.",
        "Khu vực nghỉ ngơi: Khu vực nghỉ ngơi riêng biệt với ghế sofa sang trọng để bạn và gia đình có không gian thư giãn và trò chuyện.",
        "Khu vực làm việc: Bàn làm việc rộng rãi và ghế để bạn có thể làm việc hiệu quả hoặc thư giãn.",
        "Giải trí: Truy cập Internet Wi-Fi tốc độ cao miễn phí, TV màn hình phẳng siêu lớn với các kênh truyền hình quốc tế để bạn và gia đình giải trí tối đa.",
        "Góc pha trà và cà phê: Góc pha trà và cà phê cao cấp để bạn thư giãn và tận hưởng thời gian riêng tư.",
        "Bữa sáng: Bữa sáng đa dạng và tinh tế sẽ được phục vụ tại nhà hàng hoặc khu vực phục vụ bữa sáng, giúp bạn và gia đình có sự khởi đầu tốt cho ngày mới.",
        "Dịch vụ phòng: Đội ngũ dịch vụ phòng chuyên nghiệp sẽ dọn dẹp phòng hàng ngày và cung cấp các tiện nghi cao cấp để bạn và gia đình có một trải nghiệm không gian sang trọng tối đa.",
        "Lễ tân 24/7: Lễ tân luôn sẵn sàng hỗ trợ bạn với mọi yêu cầu và thắc mắc trong suốt thời gian lưu trú của bạn và gia đình.",
      ],
      images: [
        {
          fields: {
            file: {
              url: img9,
            },
          },
        },
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
      ],
    },
  },
];

export default data;
