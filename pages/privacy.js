import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Chính sách bảo mật</title>
        <meta
          name="privacy_policy"
          content="Chính sách bảo mật này quy định cách MBY Logistics thu thập, sử dụng, duy trì và tiết lộ thông tin từ người dùng, áp dụng cho Trang và tất cả các sản phẩm và dịch vụ được cung cấp bởi MBY Logistics."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <section className="mt-10 bg-red w-full">
        <article class="prose lg:prose-lg m-auto">
          <h1 >Chính sách Bảo mật</h1>
          <p>
            Chính sách Bảo mật này quy định cách MBY Logistics thu thập, sử
            dụng, duy trì và tiết lộ thông tin từ người dùng (mỗi người dùng,
            được gọi là "Người dùng") của trang web [MBY
            Logistics]("https://mby.vn/"). Chính sách Bảo mật này áp dụng cho
            mby.vn và tất cả các sản phẩm và dịch vụ được cung cấp bởi MBY
            Logistics.
          </p>
          <h2>Thông tin nhận dạng cá nhân</h2>
          <p>
            Chúng tôi có thể thu thập thông tin nhận dạng cá nhân từ Người dùng
            thông qua nhiều cách khác nhau, bao gồm khi Người dùng truy cập
            trang web, đăng ký, đặt hàng, điền vào biểu mẫu và trong các hoạt
            động, dịch vụ, tính năng hoặc tài nguyên khác trên mby.vn. Người
            dùng có thể được yêu cầu cung cấp tên, địa chỉ email, địa chỉ gửi
            thư, số điện thoại và thông tin khác. Chúng tôi chỉ thu thập thông
            tin nhận dạng cá nhân nếu được Người dùng tự nguyện cung cấp. Người
            dùng luôn có thể từ chối cung cấp thông tin cá nhân, trừ khi việc
            này ảnh hưởng đến việc tham gia vào các hoạt động trên mby.vn.
          </p>
          <h2>Thông tin không nhận dạng cá nhân</h2>
          <p>
            Chúng tôi có thể thu thập thông tin không nhận dạng cá nhân về Người
            dùng khi họ tương tác với mby.vn, như tên trình duyệt, loại máy tính
            và thông tin kỹ thuật liên quan đến việc kết nối với mby.vn.
          </p>
          <h2>Cookie trình duyệt web:</h2>
          <p>
            mby.vn web có thể sử dụng "cookie" để cải thiện trải nghiệm của
            Người dùng. Trình duyệt web của Người dùng sẽ lưu trữ cookie để phục
            vụ cho việc lưu trữ thông tin và theo dõi thông tin về họ. Người
            dùng có thể chọn từ chối cookie hoặc nhận thông báo khi có cookie
            được gửi. Tuy nhiên, việc từ chối cookie có thể làm giảm chức năng
            của mby.vn.
          </p>
          <h2>Sử dụng thông tin thu thập</h2>
          <p>
            MBY Logistics có thể sử dụng thông tin cá nhân của Người dùng để cải
            thiện dịch vụ, xử lý thanh toán, gửi thông tin liên quan đến đơn
            hàng và cung cấp thông tin về tin tức, cập nhật hoặc dịch vụ liên
            quan.
          </p>
          <h2>Bảo vệ thông tin cá nhân</h2>
          <p>
            Chúng tôi sử dụng biện pháp bảo mật phù hợp để bảo vệ thông tin cá
            nhân của Người dùng khỏi truy cập, sửa đổi, tiết lộ hoặc phá hủy
            trái phép.
          </p>
          <h2>Chia sẻ thông tin cá nhân:</h2>
          <p>
            Chúng tôi không bán, trao đổi hoặc cho thuê thông tin cá nhân của
            Người dùng cho bên thứ ba. Chúng tôi có thể chia sẻ thông tin tổng
            hợp không liên kết đến bất kỳ thông tin cá nhân nào với đối tác kinh
            doanh, đối tác tin cậy và quảng cáo để phục vụ các mục đích đã nêu.
          </p>
          <h2>Thay đổi Chính sách bảo mật</h2>
          <p>
            MBY Logistics có quyền cập nhật Chính sách bảo mật này vào bất kỳ
            lúc nào. Chúng tôi khuyến khích Người dùng kiểm tra thường xuyên
            trang này để cập nhật thông tin về cách chúng tôi bảo vệ thông tin
            cá nhân mà chúng tôi thu thập.
          </p>
          <h2>Chấp nhận điều khoản</h2>
          <p>
            Việc sử dụng mby.vn này đồng nghĩa với việc bạn chấp nhận Chính sách
            bảo mật này. Nếu bạn không đồng ý với Chính sách này, vui lòng không
            sử dụng mby.vn web của chúng tôi.
          </p>
          <h2>Liên hệ</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật này hoặc vấn đề
            liên quan đến mby.vn web, vui lòng liên hệ với chúng tôi qua info@mby.vn.
          </p>
          <p>Tài liệu này được cập nhật lần cuối vào 20/12/2023.</p>
        </article>
      </section>

      <Footer />
      <PopupWidget />
    </>
  );
}
