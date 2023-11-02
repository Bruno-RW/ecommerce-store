"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import { Product } from "@/lib/types";
import useCart from "@/hooks/useCart";
import usePreviewModal from "@/hooks/usePreviewModal";

import Currency from "@/components/ui/Currency";
import IconButton from "@/components/ui/IconButton";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => router.push(`/product/${data?.id}`);

  const onPreview: MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4" onClick={handleClick}>
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image className="aspect-square object-cover rounded-md"
          src={data.images?.[0]?.url}
          alt=""
          fill
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={onPreview}

            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>

      {/* Price & Review */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
export default ProductCard;