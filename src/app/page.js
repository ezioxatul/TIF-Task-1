import Image from "next/image";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <div className="relative">
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
            className="  rounded-bl-[140px] z-10"
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
        <div className="mt-8">
          {" "}
          {/* Add margin-top to create space between sections */}
          <div className="font-bold text-3xl text-[#0E2368]">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </div>
          <div className="text-[#444957] mt-2">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </div>
          <Button
            bg="#E23744"
            _hover={{
              background: "red.600",
            }}
            color="white"
            rounded="full"
            className="mt-4"
          >
            Explore Now!
          </Button>
        </div>
      </div>
    </>
  );
}
