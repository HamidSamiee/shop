'use client'
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { useEffect,  useState } from "react";
import { useGetProducts } from "@/hooks/useProducts";
import { toPersianDigits, toPersianDigitsWithComma } from "@/utils/toPersianDigits";
import ReadMore from "@/components/ReadMore";



export default function Home() {
  
  // const ref=useOutsideClick(()=>false);

  const [inerWidth, setInerWidth] = useState();

  useEffect(() => {
    setInerWidth(window.innerWidth)

  }, [inerWidth])
  
  const {data,isLoading} = useGetProducts();
  const {products}=data || {};
  const offProducts=products?.filter((p)=>p.price > p.offPrice)
  
  return (
    <main  className="-z-50 overflow-hidden ">
      <h1 className="w-full flex items-center justify-center font-semibold gap-x-3 mb-4">
                به فروشگاه اینترنتی  <span className="font-extrabold animate-pulse">
                   استار شاپ
                 </span>  خوش آمدید
      </h1>
      <div className="w-full h-auto space-y-12">
        <Swiper
          spaceBetween={30}
          autoplay
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade,FreeMode, Navigation, Pagination,Autoplay]}
          className="mySwiper w-full "
        >
          <SwiperSlide >
            <Image unoptimized src={inerWidth < 768 ? "/images/slider/1kharid-s.webp" : "/images/slider/1kharid.webp"} priority quality={100}  sizes="(min-width: 320px) 320px,(min-width: 375px) 375px,(min-width: 425px) 425px,(min-width: 640px) 640px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, (min-width: 1200px) 1280px" alt='' width={2880} height={600}   style={{width: '100%',height: 'auto',objectFit: 'contain'}} />
          </SwiperSlide>
          <SwiperSlide>
            <Image unoptimized src={inerWidth < 768 ? "/images/slider/books-s.webp" : "/images/slider/books.webp"}  quality={100} sizes="(min-width: 320px) 320px,(min-width: 375px) 375px,(min-width: 425px) 425px,(min-width: 640px) 640px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, (min-width: 1200px) 1280px" alt='' width={2880} height={600}  style={{ width: '100%',height: 'auto',bjectFit: 'contain'}} />
          </SwiperSlide>
          <SwiperSlide>
            <Image unoptimized src={inerWidth < 768 ? "/images/slider/custom-laptop-s.webp" : "/images/slider/custom-laptop.webp"} quality={100}  sizes="(min-width: 320px) 320px,(min-width: 375px) 375px,(min-width: 425px) 425px,(min-width: 640px) 640px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, (min-width: 1200px) 1280px" alt='' width={2880} height={600}   style={{width: '100%',height: 'auto',objectFit: 'contain'}} />
          </SwiperSlide>
          <SwiperSlide>
            <Image unoptimized src={inerWidth < 768 ? "/images/slider/macbook-s.webp" : "/images/slider/macbook.webp"} quality={100}  sizes="(min-width: 320px) 320px,(min-width: 375px) 375px,(min-width: 425px) 425px,(min-width: 640px) 640px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, (min-width: 1200px) 1280px" alt='' width={2880} height={600}   style={{width: '100%',height: 'auto',objectFit: 'contain'}} />
          </SwiperSlide>
          <SwiperSlide>
            <Image unoptimized src={inerWidth < 768 ? "/images/slider/niceLaptop-s.webp" : "/images/slider/niceLaptop.webp"} quality={100}  sizes="(min-width: 320px) 320px,(min-width: 375px) 375px,(min-width: 425px) 425px,(min-width: 640px) 640px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, (min-width: 1200px) 1280px" alt='' width={2880} height={600}   style={{width: '100%',height: 'auto',objectFit: 'contain'}} />
          </SwiperSlide>
          <SwiperSlide>
            <Image unoptimized src={inerWidth < 768 ? "/images/slider/popular-Laptop-s.webp" : "/images/slider/popular-Laptop.webp"} quality={100}  sizes="(min-width: 320px) 320px,(min-width: 375px) 375px,(min-width: 425px) 425px,(min-width: 640px) 640px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, (min-width: 1200px) 1280px" alt='' width={2880} height={600}   style={{width: '100%',height: 'auto',objectFit: 'contain'}} />
          </SwiperSlide>
          <SwiperSlide>
            <Image unoptimized src={inerWidth < 768 ? "/images/slider/samsung-s24-s.webp" : "/images/slider/samsung-s24.webp"} quality={100}  sizes="(min-width: 320px) 320px,(min-width: 375px) 375px,(min-width: 425px) 425px,(min-width: 640px) 640px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, (min-width: 1200px) 1280px" alt='' width={2880} height={600}   style={{width: '100%',height: 'auto',objectFit: 'contain'}} />
          </SwiperSlide>
          <SwiperSlide>
            <Image unoptimized src={inerWidth < 768 ? "/images/slider/motorola-s.webp" : "/images/slider/motorola.webp"} quality={100}  sizes="(min-width: 320px) 320px,(min-width: 375px) 375px,(min-width: 425px) 425px,(min-width: 640px) 640px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, (min-width: 1200px) 1280px" alt='' width={2880} height={600}  style={{owidth: '100%',height: 'auto',bjectFit: 'contain'}} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView={inerWidth < 768 ? 3 : 4}
          spaceBetween={30}
          autoplay
          loop
          freeMode={true}
          navigation={false}
          modules={[FreeMode,Autoplay]}
          className="mySwiper"
          
        >
          <SwiperSlide >
                  <Link href='/products?category=laptop' className="flex flex-col gap-y-1 justify-center items-center" >
                        <Image src="/images/circleSlider/L.webp" alt="" className="rounded-full p-1 border-2 border-rose-300 hover:border-4 hover:border-rose-500  w-[76px] h-[76px] lg:w-[114px] lg:h-[114px] " width={250} height={250} />
                        <p className="text-base">لپ تاپ</p>
                  </Link>
          </SwiperSlide>
          <SwiperSlide>
                  <Link href='/products?category=mobile' className="flex flex-col gap-y-1 justify-center items-center" >
                        <Image src="/images/circleSlider/M.webp" alt="" className="rounded-full p-1 border-2 border-rose-300 hover:border-4 hover:border-rose-500  w-[76px] h-[76px] lg:w-[114px] lg:h-[114px] " width={250} height={250} />
                        <p className="text-base">موبایل</p>
                  </Link>
          </SwiperSlide>
          <SwiperSlide>
                  <Link href='/products?category=book' className="flex flex-col gap-y-1 justify-center items-center" >
                        <Image src="/images/circleSlider/book.webp" alt="" className="rounded-full p-1 border-2 border-rose-300 hover:border-4 hover:border-rose-500  w-[76px] h-[76px] lg:w-[114px] lg:h-[114px] " width={250} height={250} />
                        <p className="text-base">کتاب ها</p>
                  </Link>
          </SwiperSlide>
          <SwiperSlide>
                  <Link href='' className="flex flex-col gap-y-1 justify-center items-center" >
                        <Image src="/images/circleSlider/T.webp" alt="" className="rounded-full p-1 border-2 border-rose-300 hover:border-4 hover:border-rose-500  w-[76px] h-[76px] lg:w-[114px] lg:h-[114px] " width={250} height={250} />
                        <p className="text-base">تبلت</p>
                  </Link>
          </SwiperSlide>
          <SwiperSlide>
                  <Link href='' className="flex flex-col gap-y-1 justify-center items-center" >
                        <Image src="/images/circleSlider/H.webp" alt="" className="rounded-full p-1 border-2 border-rose-300 hover:border-4 hover:border-rose-500  w-[76px] h-[76px] lg:w-[114px] lg:h-[114px] " width={250} height={250} />
                        <p className="text-base">هدفون و هندزفری</p>
                  </Link>
          </SwiperSlide>
          <SwiperSlide>
                  <Link href='' className="flex flex-col gap-y-1 justify-center items-center" >
                        <Image src="/images/circleSlider/B.webp" alt="" className="rounded-full p-1 border-2 border-rose-300 hover:border-4 hover:border-rose-500  w-[76px] h-[76px] lg:w-[114px] lg:h-[114px] " width={250} height={250} />
                        <p className="text-base">اسپیکر</p>
                  </Link>
          </SwiperSlide>
          <SwiperSlide>
                  <Link href='' className="flex flex-col gap-y-1 justify-center items-center" >
                        <Image src="/images/circleSlider/W.webp" alt="" className="rounded-full p-1 border-2 border-rose-300 hover:border-4 hover:border-rose-500  w-[76px] h-[76px] lg:w-[114px] lg:h-[114px] " width={250} height={250} />
                        <p className="text-base">ساعت</p>
                  </Link>
          </SwiperSlide>
          <SwiperSlide>
                  <Link href='' className="flex flex-col gap-y-1 justify-center items-center" >
                        <Image src="/images/circleSlider/P.webp" alt="" className="rounded-full p-1 border-2 border-rose-300 hover:border-4 hover:border-rose-500  w-[76px] h-[76px] lg:w-[114px] lg:h-[114px] " width={250} height={250} />
                        <p className="text-base">ماشین های اداری</p>
                  </Link>
          </SwiperSlide>
          <SwiperSlide>
                  <Link href='' className="flex flex-col gap-y-1 justify-center items-center" >
                        <Image src="/images/circleSlider/S.webp" alt="" className="rounded-full p-1 border-2 border-rose-300 hover:border-4 hover:border-rose-500  w-[76px] h-[76px] lg:w-[114px] lg:h-[114px] " width={250} height={250} />
                        <p className="text-base">لوازم جانبی</p>
                  </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className=" mt-12 p-3 mx-4 border-4 border-red-600 rounded-lg flex flex-col gap-y-2">
         <div className="relative block  mx-3 rounded-lg overflow-hidden">
              <Image 
                src='/images/logo/h.webp'
                alt=""
                unoptimized
                sizes="100vw"
                width={1191}
                height={56}
                className={`p-1 w-full ${inerWidth < 1024 ? 'object-cover' : 'object-contain'} `}
              />
         </div>
         {/* <div className="relative block mx-3 rounded-lg overflow-hidden md:hidden">
              <Image 
                src='/images/logo/f.webp'
                alt=""
                unoptimized
                sizes="100vw"
                width={510}
                height={56}
                className={`p-1 w-full ${inerWidth < 1024 ? 'object-cover' : 'object-contain'} `}
              />
         </div> */}
         <Swiper
          slidesPerView={inerWidth < 480 ? 1 : inerWidth < 768 ? 2 : inerWidth < 1024 ? 3 : 4}
          spaceBetween={10}
          autoplay
          loop
          freeMode={true}
          navigation={true}
          modules={[FreeMode,Autoplay]}
          className="mySwiper w-full grid md:grid-cols-3 lg:grid-cols-4"
         >
            {
              offProducts?.map((p)=>{
               return<SwiperSlide key={p._id}>
                       <Link  href={`/products/${p.slug}`}>
                        <div  className={`shadow-2xl p-2 flex flex-col gap-y-3 justify-between items-center rounded-xl`}>
                            <div className="relative flex items-center justify-center h-52">
                              <Image 
                                    src={p?.imageLink}
                                    alt={p?.slug}
                                    blurDataURL={p?.imageLink}
                                    placeholder='blur'
                                    width={150}
                                    height={90}
                                    sizes='(max-width:640px) 100vw,(max-width:768px) 80vw,(max-width:1024px) 60vw,50vw'
                                    loading='lazy'
                                    className="w-full h-full top-0 left-0 rounded-2xl object-contain"
                              />
                            </div>
                            <div className="px-2 flex flex-col gap-y-2">
                              <h3 className="font-bold text-ellipsis line-clamp-1">{p.title}</h3>
                              <div className="text-ellipsis line-clamp-2">{p.description}</div>
                            </div>
                            <div className="px-4 w-full">
                              <div className="w-full flex items-center justify-between ">
                                    <div className="bg-rose-500 px-2 py-0.5 rounded-md text-white text-sm">
                                        % {toPersianDigits(p.discount)} 
                                    </div>
                                    <p className="font-extrabold text-red-600">
                                        {" "}
                                        {toPersianDigitsWithComma(p.offPrice)} تومان
                                    </p>
                              </div>
                              <p className=" line-through text-end">{toPersianDigitsWithComma(p.price)} تومان</p>
                            </div>
                        </div>
                      </Link>
                 </SwiperSlide>
              })
             }
         </Swiper> 
      </section>
      <section className="mt-6 px-4 grid md:grid-cols-2">
                <div className="relative block">
                      <Image 
                        src='/images/slideheader/cpu.webp'
                        alt=""
                        unoptimized
                        sizes="100vw"
                        width={1000}
                        height={300}
                        className={`p-1 w-full rounded-lg object-contain `}
                      /> 
                </div>
                <div className="relative block">
                      <Image 
                        src='/images/slideheader/watch.webp'
                        alt=""
                        unoptimized
                        sizes="100vw"
                        width={1000}
                        height={300}
                        className={`p-1 w-full rounded-lg object-contain`}
                      />             
                </div>
      </section>
      <section className="mt-6 px-4">
             <ReadMore>
                  <h3 className="font-bold mb-1">فروشگاه اینترنتی استارشاپ</h3>
                    <p className="text-justify mb-1.5">
                          فروشگاه اینترنتی استارشاپ سال‌ها است که به‌عنوان بزرگترین فروشگاه کالای دیجیتال مشغول فعالیت است. از آن‌جا که خرید اینترنتی همواره موجی از بی‌اعتمادی و شک را با خود به‌همراه داشته، نماد الکترونیکی می‌تواند خیال خیلی از افراد را راحت کند. استارشاپ با داشتن نماد اعتماد الکترونیکی و عضویت در سازمان صنفی رایانه‌ای کشور، همچنین عضویت در انجمن صنفی فروشگاه‌های اینترنتی، فضای ایمن برای خرید آنلاین را برای مشتریان خود ایجاد کرده است.

                          شما می‌توانید خرید کالای دیجیتال مانند خرید لپ تاپ ، گوشی موبایل در مدل‌ها و برندهای مختلف، لوازم جانبی موبایل ، هدفون، و کلیه لوازم دیجیتال مدنظر خود را با بهترین قیمت، در فروشگاه استارشاپ به ثبت برسانید.
                    </p>
                    <h4 className="font-bold mb-1"> خرید گوشی از استارشاپ</h4>
                    <p className="text-justify mb-1.5">
                      برای خیلی از کاربران، استارشاپ فروشگاه اینترنتی موبایل محسوب می‌شود. این بدان خاطر است که شما می‌توانید انواع گوشی موبایل مورد نظر خود، از جمله گوشی شیائومی ، گوشی سامسونگ، گوشی هواوی، آیفون و دیگر برندها را در استارشاپ به‌راحتی پیدا و با قیمتی مناسب، خریداری کنید. خرید گوشی موبایل، آن‌هم اینترنتی، می‌تواند کاری دشوار باشد؛ اما شما می‌توانید با اطمینان کامل، گوشی موبایل مد نظرتان را از فروشگاه اینترنتی موبایل استارشاپ استعلام قیمت کرده و خریداری کنید. 
                    </p>
                    
             </ReadMore>
      </section>
    </main>
  );
}
