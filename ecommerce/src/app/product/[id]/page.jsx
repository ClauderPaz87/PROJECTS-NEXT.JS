"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useMarkeStore } from "@/store/MarketStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Check, GitCompareArrows, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  const params = useParams();
  const {
    products,
    addProducts,
    heartLike,
    starsRaiting,
    incrementUnity,
    decrementUnity,
    productsCartAdd,
  } = useMarkeStore();

  useEffect(() => {
    addProducts();
  }, []);

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="h-[85vh] flex items-center justify-center">
        <svg
          className="text-gray-300 animate-spin"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
        >
          <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-900"
          ></path>
        </svg>
      </div>
    );
  }

  const days = [
    "Quarta Feira",
    "Quinta Feira",
    "Segunda Feira",
    "Terça Feira",
    "Segunda Feira",
  ];

  const random = days[Math.floor(Math.random() * days.length)];

  const btnAddCart = () => {
    productsCartAdd(
      product.id,
      product.name,
      product.img,
      product.shipping,
      product.stock,
      product.price,
      product.unity,
      product.originPrice,
      product.disabledButton
    );
  };

  return (
    <div className="mt-7 flex justify-center">
      <Card className="w-full lg:w-[85%] p-5 rounded-xs">
        <div className="flex flex-col lg:flex-row">
          <div className="border-b border-b-zinc-300 w-full lg:w-3xl flex justify-center">
            <Image
              src={product.img}
              alt={`Imagem ${product.name}`}
              width={700}
              height={100}
              className="w-full lg:w-2xl h-[87vh] object-cover mb-7"
            />
          </div>

          <div className="flex flex-col w-full mt-4 lg:mt-0 lg:w-96 lg:ml-3.5">
            <div className="w-full p-4 border border-zinc-300 rounded-sm">
              <div className="flex justify-between h-auto items-center">
                <p className="text-zinc-500 text-xs flex ">
                  Novo | +{product.ratingsCount} vendidos
                </p>
                <span onClick={() => heartLike(product.id,product.img,product.name,product.price,product.like)}>
                  <Heart
                    className={`text-blue-400 cursor-pointer ${
                      product.like ? "fill-blue-400" : "fill-accent"
                    }`}
                  />
                </span>
              </div>

              <div className="mt-1.5 flex flex-col">
                <p className="font-semibold text-xl">{product.name}</p>

                <div className="flex gap-2.5 h-auto items-center">
                  <p className="text-zinc-500 mt-1 ">{product.ratings}</p>
                  <p className="mt-1 text-lg flex gap-2.5 text-blue-600">
                    {starsRaiting(product.ratings)}
                  </p>
                </div>

                <div className="text-zinc-800 mt-1.5">
                  <p className="text-3xl flex">
                    R$ {product.price}
                    <span className="text-lg h-auto flex items-start">
                      {product.price
                        .toFixed(2)
                        .split(".")
                        .join("")
                        .slice((0, 3))}
                    </span>
                  </p>

                  <p className="mt-1 text-base flex gap-0.5">
                    Em 12X R$ {Math.round(product.price / 12)}
                    <span className="text-xs h-auto flex items-start">
                      {(product.price / 12).toFixed(2).split(".")[1]}
                    </span>
                  </p>

                  <button className="text-blue-400 hover:underline text-sm mt-1.5 cursor-pointer">
                    Ver os meios de pagamentos
                  </button>
                </div>

                <div className="mt-5 flex flex-col">
                  <p className="text-zinc-800 flex gap-0.5 h-5">
                    Chegará {random} por R$ {product.shipping}{" "}
                    <span className="text-xs h-auto flex items-start">
                      {(product.shipping / 12).toFixed(2).split(".")[1]}
                    </span>
                  </p>

                  <button className="text-blue-400 hover:underline text-sm mt-1.5 cursor-pointer flex justify-start">
                    Mais formas de entregas
                  </button>
                </div>

                <div className="mt-5">
                  <p className="font-medium text-zinc-800">
                    {product.stock === 0
                      ? "Estoque esgotado"
                      : "Estoque disponível"}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-zinc-800 flex gap-0.5 ">
                    Quantidade:{" "}
                    <span className="font-semibold flex gap-1.5">
                      {product.unity} unidade
                      <span className="flex flex-col relative bottom-1.5">
                        <button
                          onClick={() => incrementUnity(product.id, product)}
                          className="h-3.5 cursor-pointer"
                        >
                          +
                        </button>{" "}
                        <button
                          onClick={() => decrementUnity(product.id, product)}
                          className="h-1.5 cursor-pointer"
                        >
                          -
                        </button>
                      </span>
                    </span>
                    <span className="text-zinc-500 text-sm ml-1.5">
                      (+{product.stock} disponiveis)
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-7">
                  <Link
                    className="w-full"
                    href={"https://buy.stripe.com/6oE4jTfW18CW7IY6oq"}
                  >
                    <Button
                      variant={"none"}
                      className="bg-blue-600 cursor-pointer hover:opacity-90 text-white rounded-sm p-6 w-full"
                    >
                      Comprar agora
                    </Button>
                  </Link>
                  <Button
                    onClick={btnAddCart}
                    variant={"none"}
                    className="bg-blue-200 cursor-pointer hover:opacity-80 text-blue-500 rounded-sm p-6"
                    disabled={product.disabledButton}
                  >
                    {product.disabledButton ? (
                      <span>
                        <Check />
                      </span>
                    ) : (
                      "Adicionar ao carrinho"
                    )}
                  </Button>
                </div>

                <div className="mt-4 flex flex-col gap-1.5">
                  <p className="text-zinc-800 text-xs">
                    Vendido por{" "}
                    <span className="text-blue-400">{product.seller} </span>
                  </p>
                  <p className="text-zinc-800 text-xs">
                    MercadoLíder |
                    <span className="font-semibold">+10mil vendas</span>
                  </p>
                </div>

                <div className="flex flex-col mt-5 gap-2.5">
                  <p className="text-xs flex w-full">
                    <span>
                      <GitCompareArrows className="w-6 h-6 mr-2" />
                    </span>
                    Devolução grátis Você tem 30 dias a partir da data de
                    recebimento.
                  </p>
                  <p className="text-xs flex w-full">
                    <span>
                      <ShieldCheck className="w-6 h-6 mr-2" />
                    </span>
                    Compra Garantida Vai abrir em uma nova janela, receba o
                    produto que está esperando ou devolvemos o dinheiro.
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="grid grid-cols-3"></div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
