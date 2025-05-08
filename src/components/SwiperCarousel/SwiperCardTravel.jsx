import { useEffect, useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"; // Import Link for internal navigation
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Fetch products from API
async function fetchAllProducts() {
  try {
    const productUrl = `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}wp-json/wc/v3/products?consumer_key=${process.env.NEXT_PUBLIC_WC_CONSUMER_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET}`;
    const response = await fetch(productUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // Track if client-side rendering is active

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchAllProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchData();

    // Set isClient to true after component mounts to ensure it's only rendered client-side
    setIsClient(true);
  }, []);

  if (loading || !isClient) {
    return <div>Loading...</div>; // Display loading until data is fetched and client is ready
  }

  return (
    <>
      <div className="e-full m-0 py-5 xl:py-[100px]">
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10} // Adjust space between slides to prevent any issues with looping
          className="m-0 p-0"
          autoplay={true}
          navigation
          loop={true} // Enable loop for infinite scrolling
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="group ">
              <Link href={`/product/${product.slug}`}>
                {/* Use Link to navigate to product page */}
                <Card className=" bg-transparent bg-white  p-0 m-0 shadow-none">
                  <CardHeader className=""></CardHeader>
                  <CardBody className="pb-[30px]">
                    {/* 延遲圖片渲染，只有在客戶端加載後才渲染 */}
                    {isClient && product.images[0]?.src && (
                      <img
                        loading="lazy"
                        alt={product.name}
                        className="rounded-xl group-hover:scale-105 duration-200"
                        src={product.images[0]?.src || "/images/default.jpg"}
                        width={500}
                        height={300}
                      />
                    )}
                    <div className="description flex flex-col">
                      {/* 顯示產品名稱 */}
                      <div className="p-4 flex flex-col">
                        <b className="text-black">{product.name}</b>
                        <b className="text-black">Price: ${product.price}</b>
                      </div>

                      <a
                        href="#"
                        className="border  border-gray-400 text-black p-1 text-[12px] font-bold rounded-[30px] w-1/2 mx-auto mt-4 text-center bg-[#91AD9E]"
                      >
                        BUY NOW
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="w-full min-h-[200px] flex items-center justify-center">
          <button className="px-6 py-2 font-medium bg-buy-dark text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            More
          </button>
        </div> */}
      </div>
    </>
  );
}
