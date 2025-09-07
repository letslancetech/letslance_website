import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import MaterialIcon from "../../../common/MaterialIcon";
import testimonialBg from "../../../assets/lanceImages/testimonialBg.png";

const testimonialsContent = [
  {
    name: "Rahul Agarwal",
    position: "Co-founder of IdeaVault",
    imgUrl:
      "https://media.licdn.com/dms/image/D4E03AQEMPDWbc_2bJg/profile-displayphoto-shrink_400_400/0/1681248489821?e=1694044800&v=beta&t=9MtG9i1G4LrScM7lufpNHNpI_GI6YzvBYKSEq9pQHZY",
    description:
      "Letslance HK has truly been a game-changer for us at IdeaVault. Their proficiency in technical consulting coupled with their deep understanding of the fintech landscape has catalyzed our product development and helped us achieve our targets faster than we ever thought possible. They didn't just meet our requirements, they became an integral part of our team, guiding us through the complex process with ease and efficiency. It has been a pleasure working with Letslance HK and I'd highly recommend them to any fintech company seeking top-tier technical consulting and solutions.",
  },
  {
    name: "Aryan Agarwal",
    position: "Co-founder of Grid Flow",
    imgUrl:
      "https://media.licdn.com/dms/image/C5603AQEHEhqvtVcyIA/profile-displayphoto-shrink_400_400/0/1642414486225?e=1694044800&v=beta&t=MvrhXgjbOTy2q7SwXNfrDJ4foMZUVLUC9pDz9Eoka4o",
    description:
      "Grid Flow's journey to becoming a leading name in EV solutions wouldn't have been possible without the incredible assistance from Letslance HK. Their team didn't just bring technical expertise to the table, they brought innovation, creativity, and a unique perspective that helped us build robust and scalable solutions. The expertise they provided allowed us to streamline our processes, improve productivity, and create a better experience for our customers. It is rare to find a tech consulting firm that combines such a high degree of proficiency with a keen understanding of the EV market. I wholeheartedly recommend Letslance HK to anyone in need of tech consulting and solutions",
  },
  {
    name: "Mayukhraj Ray",
    position: "Co-founder of LyteBryte Limited",
    imgUrl:
      "https://media.licdn.com/dms/image/D4D03AQHHdl1nt9ZTfg/profile-displayphoto-shrink_400_400/0/1679288337421?e=1694044800&v=beta&t=jOwxrahavgGpO61dspBan3SEISFnfJQVVF5fZ1PUMC8",
    description:
      "When we first started LyteBryte, we knew that we had a good idea. However, turning that idea into a tangible, workable product required a level of technical expertise that was outside of our wheelhouse. That's where Letslance HK came in. Their team helped us transform our idea into a reality, and for that, we are incredibly grateful. Their commitment to excellence, their professionalism, and their willingness to go the extra mile to ensure that our platform worked flawlessly has left a lasting impression on our team. Any tech-based company looking for top-notch consulting and innovative solutions should look no further than Letslance HK.",
  },
  {
    name: "Mayukhraj Ray",
    position: "Founder of Planet Reserve",
    imgUrl:
      "https://media.licdn.com/dms/image/D4D03AQHHdl1nt9ZTfg/profile-displayphoto-shrink_400_400/0/1679288337421?e=1694044800&v=beta&t=jOwxrahavgGpO61dspBan3SEISFnfJQVVF5fZ1PUMC8",
    description:
      "The team at LetsLance has been incredible to work with. We had a broad vision for ThePlanetReserve.com, and they helped us shape it into something real — and honestly, better than what we imagined. They were super responsive throughout, quick to solve issues, and always open to feedback. What I really appreciated was how invested they were in the project — it felt like they genuinely cared about the outcome. Would definitely recommend them to anyone looking for a reliable tech team.",
  },
  {
    name: "Mayukhraj Ray",
    position: "Founder of YourFarm",
    imgUrl:
      "https://media.licdn.com/dms/image/D4D03AQHHdl1nt9ZTfg/profile-displayphoto-shrink_400_400/0/1679288337421?e=1694044800&v=beta&t=jOwxrahavgGpO61dspBan3SEISFnfJQVVF5fZ1PUMC8",
    description:
      "Working with LetsLance on YourFarm was a smooth and collaborative experience. We had a very specific vision — to build a platform that empowers farmers and connects them directly to customers — and the team got it from day one. They were patient, proactive, and always ready to go the extra mile. Even when we faced unexpected changes mid-project, they adapted quickly and kept things moving without compromising quality. What stood out the most was their ownership — it never felt like an outsourced job. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <div className="relative md:pb-28 md:pt-40 2xl:py-28 2xl:pt-24">
      <img
        src={testimonialBg}
        alt="Testimonials Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="relative z-10 text-white sm:px-5 md:px-48 2xl:px-72">
        <h2 className="mb-12 mt-0 text-center text-2xl font-semibold text-[#07507b] md:text-4xl">
          Client Testimonials
        </h2>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000, // 1 second
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            1024: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            320: { slidesPerView: 1 },
          }}
          className="w-full px-4"
        >
          {testimonialsContent.map((testimonial, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="flex w-full max-w-lg flex-col gap-y-3 rounded-2xl bg-white px-8 py-6 text-left shadow-lg">
                <div className="flex items-center gap-3">
                  {/* <img
                    src={testimonial.imgUrl}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  /> */}
                  <div>
                    {/* <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3> */}
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="line-clamp-4 text-sm leading-relaxed text-gray-800">
                  {testimonial.description}
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <MaterialIcon
                      key={idx}
                      codepoint="e838"
                      className="text-xl text-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
