import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Benefits from "../components/benefits";
import Cta from "../components/cta";
import { benefitOne, benefitTwo } from "../components/data";
import Faq from "../components/faq";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import Testimonials from "../components/testimonials";
import Video from "../components/video";

export default function Home() {
  return (
    <>
      <Head>
        <title>MBY Logistics - Đặt hàng Trung Quốc</title>
        <meta
          name="description"
          content="Nhập Hàng Trung Quốc Tận Gốc, Tối Ưu Chi Phí, Vận Chuyển Nhanh Chóng"
        />
        <meta
          property="og:image"
          content="http://graphics.myfavnews.com/images/logo-100x100.jpg"
        />
          <meta name="keywords" content="logistics, vận chuyển, vận chuyển trung quốc, mua hàng Taobao, logistics Việt Nam, MBY Logistics"/>
          <meta name="author" content="MBY Logistics"/>
          <meta name="robots" content="index, follow"/>
          <meta property="og:title" content="MBY Logistics"/>
          <meta property="og:description" content="Nhập Hàng Trung Quốc Tận Gốc, Tối Ưu Chi Phí, Vận Chuyển Nhanh Chóng"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://www.mby.vn/"/>
          <meta property="og:image" content="https://i.ibb.co/M5VxGWM/mby-logo-rec-upscale.png"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="MBY Logistics"/>
          <meta name="twitter:description" content="Nhập Hàng Trung Quốc Tận Gốc, Tối Ưu Chi Phí, Vận Chuyển Nhanh Chóng"/>
          <meta name="twitter:image" content="https://i.ibb.co/M5VxGWM/mby-logo-rec-upscale.png"></meta>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Ưu Điểm"
        title="Tại sao bạn nên sử dụng dịch vụ của MBY Logistics"
      >
        MBY Logistics - nền tảng đơn giản hóa mua hàng quốc tế, chuyên vận
        chuyển hàng từ Trung Quốc đến Việt Nam đảm bảo giải pháp hiệu quả về chi
        phí, xử lý đơn hàng nhanh chóng và dịch vụ vận chuyển tin cậy.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      <SectionTitle
        pretitle="Đánh Giá"
        title="Phản hồi từ khách hàng của chúng tôi"
      >
        Sự hài lòng được thể hiện qua đánh giá của khách hàng đối với chất lượng
        và dịch vụ của MBY Logistics
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Câu Hỏi Thường Gặp">
        Một vài câu hỏi thường gặp của khách hàng khi trải nghiệm dịch vụ của
        MBY Logistics
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
