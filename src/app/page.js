import Image from "next/image";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <div className="relative h-screen space-y-32 flex-col">
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
        <div className=" flex-col items-center justify-center">
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
              className="mt-10"
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
    </>
  );
}
