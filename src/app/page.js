import Image from "next/image";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <div className="relative ">
        {/* First section: Images and Button stacked vertically, aligned to the right */}
        <div className="relative flex flex-col items-end ">
          <Button
            _hover={{
              background: "white",
              color: "red.500",
            }}
            color="white"
            pos="absolute"
            rounded="full"
            className=" mt-4 right-4 z-30"
            variant="outline"
          >
            Get In Touch
          </Button>
          <Image
            src="/pizza-image.jpg"
            alt="pizza image"
            className=" -mt-6 rounded-bl-[140px] z-10"
            width={420}
            height={350}
          />
          <Image
            src="/vector.png"
            alt="vector art"
            className="absolute right-0 z-20"
            width={420}
            height={370}
          />
        </div>

        {/* Second section (Heading, Description, and Button) */}
        <div className="mt-8 flex-col items-center justify-center">
          <div className=" font-bold text-4xl px-16 text-center text-[#0E2368]">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </div>
          <div className="text-[#444957] text-center px-10 mt-5">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </div>
          <div className="flex justify-center">
            <Button
              bg="#E23744"
              _hover={{
                background: "red.600",
              }}
              color="white"
              rounded="full"
              className="mt-6"
            >
              Explore Now!
            </Button>
          </div>
        </div>
      </div>
      <div className=" bg-[#F0F1F7] h-screen flex flex-col justify-center space-y-10 items-center mt-10">
        <div className=" text-[#0E2368] font-bold text-3xl text-center">
          About Us
        </div>
        <div className=" text-center px-9 text-[#444957]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </div>
        <div className="flex justify-center">
          <Button
            bg="#E23744"
            _hover={{
              background: "red.600",
            }}
            color="white"
            rounded="full"
            className=""
          >
            Read More
          </Button>
        </div>
      </div>
      <div className=" mt-24 flex flex-col space-y-10 justify-center items-center  ">
        <div className="text-[#0E2368] font-bold text-3xl text-center">
          Latest Articles
        </div>
        <div className=" h-[30rem] w-72 flex flex-col space-y-4 justify-center  items-center rounded-2xl border border-gray-600">
          <Image
            src="/tomato.jpeg"
            alt="tomato picture"
            rounded="2xl"
            className=" mt-5 rounded-3xl"
            width={200}
            height={100}
          />
          <div className="text-[#0E2368] font-bold text-md text-center">
            Grilled Tomatoes at Home
          </div>
          <div className=" text-center text-sm px-4 text-[#444957]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley....
          </div>

          <Button
            _hover={{
              background: "red.500",
              color: "white",
            }}
            w="40"
            color="gray.600"
            border="2px"
            rounded="full"
            variant="outline"
          >
            Read More
          </Button>
        </div>
        <div className=" h-[30rem] w-72 flex flex-col space-y-4  items-center rounded-2xl border border-gray-600">
          <Image
            src="/snack.jpeg"
            alt="snack picture"
            rounded="2xl"
            className=" mt-5 rounded-3xl"
            width={200}
            height={100}
          />
          <div className="text-[#0E2368] font-bold text-md text-center">
            Snacks for Travel
          </div>
          <div className=" text-center text-sm px-4 text-[#444957]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley....
          </div>
          <Button
            _hover={{
              background: "red.500",
              color: "white",
            }}
            w="40"
            color="gray.600"
            border="2px"
            rounded="full"
            variant="outline"
          >
            Read More
          </Button>
        </div>
        <div className=" h-[30rem] w-72 flex flex-col space-y-4  items-center rounded-2xl border border-gray-600">
          <Image
            src="/post-workout.jpeg"
            alt="post workout picture"
            rounded="2xl"
            className=" mt-5 rounded-3xl"
            width={200}
            height={100}
          />
          <div className="text-[#0E2368] font-bold text-md text-center">
            Post-workout Recipes
          </div>
          <div className=" text-center text-sm px-4 text-[#444957]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley....
          </div>
          <Button
            _hover={{
              background: "red.500",
              color: "white",
            }}
            w="40"
            color="gray.600"
            border="2px"
            rounded="full"
            variant="outline"
          >
            Read More
          </Button>
        </div>
        <div className=" mt-2">
          {" "}
          <Button className="mb-6">\</Button>
        </div>
      </div>
      <div className=" h-full flex flex-col space-y-6 items-center  bg-[#F8F8F8]">
        <Image
          src="/food-truck.png"
          alt="food truck picture"
          className=" mt-5 rounded-3xl"
          width={75}
          height={100}
        />
        <div className=" flex flex-col items-center space-y-8 ">
          <div className="text-[#0E2368] flex flex-col space-y-2 w-3/4 font-bold text-md text-left">
            <div>Contact Us</div>

            <div className=" font-[400] text-sm text-[#646874]">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </div>
            <div className=" font-[400] text-sm text-[#646874]">
              example2020@gmail.com
            </div>
            <div className=" font-[400] text-sm text-[#646874]">
              (904) 443-0343
            </div>
          </div>
          <div className="text-[#0E2368] flex flex-col space-y-2 w-3/4 font-bold text-md text-left">
            <div>More</div>
            <div className=" font-[400] text-sm text-[#646874]">About Us</div>
            <div className=" font-[400] text-sm text-[#646874]">Products</div>
            <div className=" font-[400] text-sm text-[#646874]">Career</div>
            <div className=" font-[400] text-sm text-[#646874]">Contact Us</div>
          </div>
          <div className="">
            <div className=" mb-3 font-[400] text-sm text-[#646874]">
              © 2022 Food Truck Example
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
