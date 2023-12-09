import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";

export default function Term() {
  return (
    <>
      <Head>
        <title>Chính sách dịch vụ</title>
        <meta
          name="privacy_policy"
          content="Điều Khoản Dịch Vụ MBY Logistics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <section className="mt-10 bg-red w-full">
        <article class="prose lg:prose-lg m-auto">
          <h1>Điều Khoản Dịch Vụ MBY Logistics</h1>
          <p>
            Chào mừng bạn đến với MBY Logistics. Bằng việc sử dụng dịch vụ của
            chúng tôi, bạn đồng ý tuân theo và bị ràng buộc bởi các điều khoản
            và điều kiện sau đây. Vui lòng đọc kỹ những điều khoản này trước khi
            sử dụng dịch vụ của chúng tôi.
          </p>
          <h2>Mô tả Dịch Vụ</h2>
          <p>
            MBY Logistics cung cấp các dịch vụ vận chuyển và mua sắm giúp đơn
            hàng, nguồn cung và vận chuyển hàng hóa từ Trung Quốc đến Việt Nam.
            Nền tảng của chúng tôi hoạt động như một cầu nối giữa khách hàng và
            nhà cung cấp, tối ưu hóa quá trình mua hàng và vận chuyển sản phẩm
            đến các địa điểm quy định tại Việt Nam.
          </p>
          <h2>Trách Nhiệm của Người Dùng</h2>
          <p>
            Người dùng có trách nhiệm cung cấp thông tin chính xác và cập nhật
            khi đặt hàng thông qua MBY Logistics. Mọi hành vi lạm dụng hoặc gian
            lận trên nền tảng của chúng tôi đều bị cấm. Người dùng cũng phải
            tuân theo các hướng dẫn, điều khoản và điều kiện được quy định bởi
            MBY Logistics trong quá trình đặt hàng và vận chuyển hàng hóa.
          </p>
          <h2>Đặt Hàng và Thanh Toán</h2>
          <p>
            Các đơn hàng đặt qua MBY Logistics phải được chấp nhận và phụ thuộc
            vào sự có sẵn. Chúng tôi có quyền từ chối hoặc hủy bỏ bất kỳ đơn
            hàng nào theo quyết định của chúng tôi. Thanh toán cho các đơn hàng
            phải được thực hiện đầy đủ và theo các điều kiện thanh toán được chỉ
            định trong quá trình thanh toán. Đơn hàng sẽ được xử lý sau khi nhận
            được thanh toán.
          </p>
          <h2>Vận Chuyển và Giao Hàng</h2>
          <p>
            MBY Logistics nỗ lực để đảm bảo vận chuyển và giao hàng đúng thời
            hạn. Mặc dù chúng tôi cố gắng đáp ứng thời gian giao hàng ước tính,
            nhưng những tình huống bất ngờ và thách thức về logistic có thể ảnh
            hưởng đến lịch trình giao hàng. Chúng tôi không chịu trách nhiệm về
            bất kỳ sự trì hoãn nào vượt quá khả năng kiểm soát hợp lý của chúng
            tôi.
          </p>
          <h2>Hủy Đơn Hàng và Hoàn Tiền</h2>
          <p>
            Việc hủy đơn hàng có thể tuân theo các điều khoản và điều kiện cụ
            thể được MBY Logistics quy định. Hoàn tiền, nếu có, sẽ được xử lý
            theo chính sách hoàn tiền của chúng tôi. Bất kỳ phí hoặc chi phí nào
            liên quan đến việc hủy đơn hàng cũng có thể được khấu trừ từ số tiền
            hoàn lại.
          </p>
          <h2>Quyền Sở Hữu Trí Tuệ</h2>
          <p>
            Người dùng giữ quyền sở hữu và quyền trí tuệ đối với bất kỳ nội dung
            hoặc thông tin nào họ gửi qua MBY Logistics. Bằng cách sử dụng dịch
            vụ của chúng tôi, người dùng cấp cho MBY Logistics một giấy phép
            không độc quyền, miễn phí để sử dụng, sao chép, điều chỉnh, xuất bản
            và phân phối nội dung để cung cấp dịch vụ và quảng cáo.
          </p>
          <h2>Hạn Chế Trách Nhiệm</h2>
          <p>
            MBY Logistics không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp,
            gián tiếp, ngẫu nhiên hoặc theo sau nào phát sinh từ việc sử dụng
            hoặc không thể sử dụng dịch vụ của chúng tôi. Hạn chế trách nhiệm
            này áp dụng cho tất cả các yêu cầu, dù dựa trên bảo hành, hợp đồng,
            vụ kiện hoặc bất kỳ lý thuyết pháp lý nào khác.
          </p>
          <h2>Thay Đổi Điều Khoản</h2>
          <p>
            MBY Logistics có quyền sửa đổi các Điều khoản dịch vụ này bất cứ lúc
            nào mà không cần thông báo trước. Mọi sửa đổi sẽ có hiệu lực ngay
            khi đăng lên trang web của chúng tôi. Việc tiếp tục sử dụng dịch vụ
            của chúng tôi sau khi có thay đổi được coi là chấp nhận các điều
            khoản đã sửa đổi.
          </p>
          <h2>Liên hệ</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về Điều khoản dịch vụ này, vui lòng
            liên hệ với chúng tôi qua [Thông tin liên hệ].
          </p>
          <p>Tài liệu này được cập nhật lần cuối vào 20/12/2023.</p>
        </article>
      </section>

      <Footer />
      <PopupWidget />
    </>
  );
}
