"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const cocktails = [
  {
    name: "Banana Velvet Shot",
    flavour: "Big Banana",
    flavourColor: "#f3db03",
    image: "/assets/banana-velvet.webp",
    ingredients: ["1.5 oz Big Banana", "0.5 oz Bailey's liqueur"],
    method: "Shake with ice in a shaker. Strain it into a double shot glass.",
  },
  {
    name: "Tropical Bang",
    flavour: "Big Banana",
    flavourColor: "#f3db03",
    image: "/assets/tropical-bang.webp",
    ingredients: ["1.5 oz Big Banana", "1 oz coconut rum", "3 oz pineapple juice", "Ice"],
    method: "Shake all ingredients with ice. Strain into a highball glass over fresh ice.",
  },
  {
    name: "Monkey Business",
    flavour: "Big Banana",
    flavourColor: "#f3db03",
    image: "/assets/monkey-business.webp",
    ingredients: ["1 oz Big Banana", "0.5 oz Kahlua", "0.5 oz Bailey's", "Ice"],
    method: "Shake with ice and strain into a nick and nora glass.",
  },
  {
    name: "Raspberry Rumble",
    flavour: "Ripe Raspberry",
    flavourColor: "#ff3672",
    image: "/assets/raspberry-rumble.webp",
    ingredients: ["1.5 oz Ripe Raspberry", "1 oz vodka", "0.5 oz lime juice", "Soda water"],
    method: "Build in a highball glass over ice. Top with soda.",
  },
  {
    name: "Berry Fizz",
    flavour: "Ripe Raspberry",
    flavourColor: "#ff3672",
    image: "/assets/berry-fizz.webp",
    ingredients: ["1 oz Ripe Raspberry", "4 oz champagne", "Lemon twist"],
    method: "Pour Ripe Raspberry into a flute. Top with champagne. Garnish with lemon.",
  },
  {
    name: "Pink Panther",
    flavour: "Ripe Raspberry",
    flavourColor: "#ff3672",
    image: "/assets/pink-panther.webp",
    ingredients: ["1.5 oz Ripe Raspberry", "1 oz gin", "4 oz tonic", "Fresh berries"],
    method: "Build in a balloon glass over ice. Garnish with fresh berries.",
  },
  {
    name: "Bang Bang Shot",
    flavour: "Both",
    flavourColor: "#f94a02",
    image: "/assets/bang-bang-shot.webp",
    ingredients: ["0.75 oz Big Banana", "0.75 oz Ripe Raspberry", "0.5 oz vodka", "Splash of lemon"],
    method: "Shake all with ice. Strain into a double shot glass.",
  },
  {
    name: "Sunrise Bang",
    flavour: "Big Banana",
    flavourColor: "#f3db03",
    image: "/assets/sunrise-bang.webp",
    ingredients: ["1.5 oz Big Banana", "3 oz orange juice", "Grenadine", "Ice"],
    method: "Pour Big Banana and OJ over ice. Slowly add grenadine for sunrise effect.",
  },
  {
    name: "Raspberry Lemonade",
    flavour: "Ripe Raspberry",
    flavourColor: "#ff3672",
    image: "/assets/raspberry-lemonade.webp",
    ingredients: ["1.5 oz Ripe Raspberry", "4 oz lemonade", "Fresh mint", "Ice"],
    method: "Build over ice in a tall glass. Garnish with mint.",
  },
]

export default function CocktailsPage() {
  return (
    <main>
      <Header />

      {/* HERO — UNCHANGED */}
      <section className="bg-[#f5f5f5] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h1
            className="text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            COCKTAILS THAT
            <br />
            GO <span className="text-[#f94a02]">BANG</span>
          </motion.h1>

          <motion.p
 className="
 text-xl
 md:text-2xl
 text-[#525252]
 max-w-2xl
"            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Simple recipes. Maximum impact. These drinks hit different.
          </motion.p>
        </div>
      </section>

      {/* COCKTAILS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-28">
          {cocktails.map((cocktail, index) => (
            <motion.div
              key={cocktail.name}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              {/* IMAGE */}
              <div className="relative w-full h-[420px] md:h-[520px]">
                <Image
                  src={cocktail.image}
                  alt={cocktail.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* CONTENT */}
              <div>
                <div
                  className="w-16 h-1 mb-6"
                  style={{ backgroundColor: cocktail.flavourColor }}
                />

                <h3 className="text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-4">
                  {cocktail.name}
                </h3>

                <p
                  className="uppercase tracking-wide mb-6 text-base font-medium"
                  style={{ color: cocktail.flavourColor }}
                >
                  Made with {cocktail.flavour}
                </p>

                <div className="mb-8">
                  <p className="text-sm uppercase text-[#737373] mb-2">
                    Ingredients
                  </p>
                  <ul className="space-y-1">
                    {cocktail.ingredients.map((i) => (
                      <li key={i} className="body-text text-[#525252]">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="max-w-md">
                  <p className="text-sm uppercase text-[#737373] mb-2">
                    Method
                  </p>
                  <p className="body-text text-[#525252]">
                    {cocktail.method}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-8">
          GOT THE RECIPES. NEED THE BANG.
        </h2>
        <Link
          href="/where-to-buy"
          className="inline-block bg-[#f94a02] text-white px-6 py-3 rounded hover:bg-[#f3db03] hover:text-black"
        >
          FIND BANG ON →
        </Link>
      </section>

      <Footer />
    </main>
  )
}
