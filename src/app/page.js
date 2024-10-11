import Image from "next/image";
import { Button } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <div className=" flex relative">
        <Image
          src="/pizza-image.jpg"
          alt="pizza image"
          className=" absolute -mt-5 right-0 rounded-bl-[140px] z-10"
          width={400}
          height={350}
        />
        <Image
          src="/vector.png"
          alt="vector art"
          className=" right-0 absolute z-20"
          width={400}
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
        <div>Discover the Best Food and Drinks</div>
      </div>
      
    </>
  );
}
