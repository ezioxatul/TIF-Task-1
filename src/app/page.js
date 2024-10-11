import Image from "next/image";
import { Button } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <div className=" flex flex-col">
        <div>
          <Image
            src="/pizza-image.jpg"
            alt="pizza image"
            className=" absolute -mt-5 right-0 rounded-bl-[140px] z-10"
            width={420}
            height={350}
          />
          <Image
            src="/vector.png"
            alt="vector art"
            className=" right-0 absolute z-20"
            width={420}
            height={370}
          />
          <Button
            display="flex"
            _hover={{
              background: "white",
              color: "red.500",
            }}
            pos="absolute"
            right="0"
            zIndex={30}
            color="white"
            rounded="full"
            mt="4"
            mr="4"
            variant="outline"
          >
            Get In Touch
          </Button>
        </div>

        {/* This section contains a heading, a description, and a button for exploring more */}
        <div>
          <div className=" font-bold text-3xl text-[#0E2368]">
            Discover the <span className=" text-[#E23744]">Best</span> Food and
            Drinks
          </div>
          <div className=" text-[#444957 ]">
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
          >
            Explore Now!
          </Button>
        </div>

        {/* .................. */}


      </div>
    </>
  );
}
