"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="grid place-items-center">
      <div className="relative w-[315px] h-[470px] overflow-hidden">
        <Image
          src={images[current]}
          alt="product image"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            className={cn(
              "relative m-[2px] overflow-hidden tracking-wide w-[100px] h-[100px] border-3 mt-2 cursor-pointer hover:border-rose-200",
              current === index && "border-rose-200",
            )}
            onClick={() => setCurrent(index)}
          >
            <Image
              src={image}
              alt="image"
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
