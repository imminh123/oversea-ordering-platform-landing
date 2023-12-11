import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Mất bao lâu để nhận được đơn đặt hàng từ Taobao thông qua MBY?",
    answer: "Thời gian giao hàng thay đổi tùy theo phương thức vận chuyển và địa điểm. Có thể mất từ 5 ngày đến 2 tuần để vận chuyển tiêu chuẩn, MBY cũng có các tùy chọn gửi nhanh với chi phí cao hơn",
  },
  {
    question: "Có bất kỳ hạn chế nào đối với các loại mặt hàng đặt qua MBY không?",
    answer: "Chúng tôi tuân thủ các quy định pháp lý và vận chuyển. Các mặt hàng bị cấm bao gồm vật liệu nguy hiểm, vũ khí và một số hàng hóa bị hạn chế. Vui lòng tham khảo chính sách nhập hàng của chúng tôi tại https://www.mby.vn/term hoặc liên hệ để có yêu cầu cụ thể",
  },
  {
    question: "Tôi có thể theo dõi đơn hàng của mình sau khi đã được gửi đi không?",
    answer:
      "Chắc chắn! Khi đơn hàng của bạn được xử lý và gửi đi, chúng tôi cung cấp thông tin theo dõi. Bạn có thể theo dõi tiến độ vận chuyển qua trang web của MBY hoặc dịch vụ của bên vận chuyển.",
  },
  {
    question: "Có bất kì phí bổ sung ngoài giá sản phẩm và phí vận chuyển không?",
    answer:
      "Tất cả các khoản phí phát sinh này sẽ được thông báo một cách minh bạch cho khách hàng của MBY trước khi hoàn tất đơn hàng của bạn.",
  },
  {
    question: "Nếu tôi nhận được sản phẩm bị hỏng hoặc không đúng với đơn hàng của mình thì sao?",
    answer:
      "MBY Logistics luôn cố gắng để đảm bảo tính chính xác và chất lượng trong mỗi đơn hàng, nhưng nếu có bất kì vấn đề phát sinh, vui lòng liên hệ với dịch vụ khách hàng của MBY. Đội ngũ của chúng tôi sẽ hỗ trợ bạn giải quyết bất kỳ vấn đề nào với đơn hàng một cách nhanh chóng.",
  },
  {
    question: "Tôi có thể hủy hoặc sửa đổi đơn hàng từ MBY sau khi đã đặt hàng không?",
    answer:
      "Sau khi một đơn hàng được xử lý và xác nhận với bên cung cấp (Taobao), việc hủy hoặc sửa đổi có thể không khả thi. Tuy nhiên, hãy liên hệ ngay với đội ngũ hỗ trợ của MBY, chúng tôi sẽ cố gắng hỗ trợ theo yêu cầu của bạn.",
  },
];
