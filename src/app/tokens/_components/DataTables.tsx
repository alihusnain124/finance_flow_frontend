"use client";

import Image, { StaticImageData } from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import btcPic from "@/assets/images/btc.svg.png";

type Token = {
  name: string;
  ticker: string;
  icon: StaticImageData;
  description: string;
  marketCap: string;
  volume: string;
  website: string;
};

const tokens: Token[] = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    icon: btcPic,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    website: "https://bitcoin.org",
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    icon: btcPic,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    website: "https://ethereum.org",
  },
  {
    name: "Litecoin",
    ticker: "LTC",
    icon: btcPic,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    website: "https://litecoin.org",
  },
  {
    name: "TRON",
    ticker: "TRX",
    icon: btcPic,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    website: "https://tron.network",
  },
];

export default function TokensTable() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="md:text-center text-start mb-28">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Tokens
          </h2>
          <p className="mt-3 md:mx-auto text-start md:w-[41%] md:text-center text-sm md:text-base text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat. Scelerisque
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl  bg-transparent">
          <Table className="w-full">
            <TableHeader
              className="
                bg-transparent border-b border-white/10
                [&>tr]:border-0
                [&>tr>th]:px-6
                [&>tr>th]:py-3
                [&>tr>th]:text-[11px]
                [&>tr>th]:uppercase
                [&>tr>th]:tracking-widest
                [&>tr>th]:text-white/50
              "
            >
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[30%] text-left">Name</TableHead>
                <TableHead className="w-[30%] text-left">Description</TableHead>
                <TableHead className="w-[15%] text-right">Market Cap</TableHead>
                <TableHead className="w-[15%] text-right">Volume</TableHead>
                <TableHead className="w-[10%] text-right pr-6">
                  Website
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody
              className="
                divide-y divide-white/10
                [&>tr>td]:px-6
                [&>tr>td]:py-10
              "
            >
              {tokens.map((t) => (
                <TableRow
                  key={t.ticker}
                  className="border-0 hover:bg-white/3 transition-colors"
                >
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <span className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/15 bg-white/5 overflow-hidden">
                        <Image
                          src={t.icon}
                          alt={t.name}
                          width={24}
                          height={24}
                          className="h-6 w-6 invert"
                          unoptimized
                        />
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm md:text-base font-medium text-white">
                          {t.name}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-dark-blue text-[11px] uppercase tracking-wide text-white">
                          {t.ticker}
                        </span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="align-middle">
                    <p className="max-w-[44ch] text-sm leading-6 text-white/70">
                      {t.description}
                    </p>
                  </TableCell>

                  <TableCell className="text-right tabular-nums font-medium text-white/80">
                    {t.marketCap}
                  </TableCell>

                  <TableCell className="text-right tabular-nums font-medium text-white/80">
                    {t.volume}
                  </TableCell>

                  <TableCell className="text-right pr-6">
                    <a
                      href={t.website}
                      target="_blank"
                      className="text-sm text-white/70 hover:text-white underline underline-offset-4"
                    >
                      Visit Website
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
