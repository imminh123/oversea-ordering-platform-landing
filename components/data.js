import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Nhập hàng tận gốc",
  desc: "Với chuyên môn trong việc quản lý chuỗi cung ứng từ Trung Quốc, chúng tôi đảm bảo sản phẩm tới tay quý khách nhanh chóng, xác nhận đơn hàng trong vòng 24 giờ sau khi thanh toán, cùng với dịch vụ giao hàng tin cậy.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Thời gian vận chuyển nhanh",
      desc: "Đội ngũ vận chuyển chuyên nghiệp, bảo đảm hàng về sau 2-5 ngày",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Đặt hàng tron vòng 24h sau thanh toán",
      desc: "Đơn hàng được xử lý và xác nhận ngay trong ngày làm việc.",
      icon: <ChartSquareBarIcon />,
    },
    // {
    //   title: "Drive customer retention",
    //   desc: "This will be your last bullet point in this section.",
    //   icon: <CursorClickIcon />,
    // },
  ],
};

const benefitTwo = {
  title: "Chi phí ưu đãi",
  desc: "MBY Logistics cung cấp giải pháp tiết kiệm chi phí, đặt hàng chính xác theo yêu cầu cùng những ưu đãi đặc biệt cho doanh nghiệp và cửa hàng.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Phí nhập hàng thấp",
      desc: "Tối ưu hóa quy trình mua hàng và loại bỏ các bên trung gian, giảm thiểu chi phí phát sinh thông thường.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Cam kết đặt đúng hàng theo yêu cầu của khách",
      desc: "Nền tảng cho phép khách hàng đặt hàng linh hoạt theo yêu cầu cụ thể.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Ưu đãi cho doanh nghiệp",
      desc: "Đối với các doanh nghiệp hoặc cửa hàng đặt hàng số lượng lớn, chúng tôi cung cấp chiết khấu theo số lượng hoặc biểu phí riêng",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
