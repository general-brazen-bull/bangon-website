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
    name: "Raspberry Rumble",
    flavour: "Ripe Raspberry",
    flavourColor: "#ff3672",
    image: "/assets/raspberry-rumble.webp",
    ingredients: [
      "1.5 oz Ripe Raspberry",
      "1 oz vodka",
      "0.5 oz lime juice",
      "Soda water",
    ],
    method: "Build in a highball glass over ice. Top with soda.",
  },
  {
    name: "Apple Jacked",
    flavour: "Bang On Green Apple",
    flavourColor: "#95cb00",
    image: "/assets/apple-jacked.webp",
    ingredients: [
      "1.5 oz Bang On Green Apple",
      "1 oz whisky",
      "0.5 oz lemon juice",
      "3 oz ginger ale",
      "Ice",
    ],
    method:
      "Build Bang On Green Apple, whisky, and lemon juice in a rocks glass over ice. Top with ginger ale and stir gently.",
  },
  {
    name: "Tropical Bang On",
    flavour: "Tropical",
    flavourColor: "#2596be",
    image: "/assets/tropical-bang.webp",
    ingredients: [
      "1.5 oz Tropical",
      "0.5 oz coconut rum",
      "2 oz pineapple juice",
      "0.5 oz fresh lime juice",
      "Ice",
    ],
    method:
      "Shake all ingredients with ice. Strain into a highball glass over fresh ice and garnish with a pineapple wedge.",
  },
  {
    name: "Berry Fizz",
    flavour: "Ripe Raspberry",
    flavourColor: "#ff3672",
    image: "/assets/berry-fizz.webp",
    ingredients: ["1 oz Ripe Raspberry", "4 oz champagne", "Lemon twist"],
    method:
      "Pour Ripe Raspberry into a flute. Top with champagne. Garnish with lemon.",
  },
  {
    name: "Sour Orchard Shot",
    flavour: "Bang On Green Apple",
    flavourColor: "#95cb00",
    image: "/assets/sour-orchard-shot.webp",
    ingredients: [
      "1 oz Bang On Green Apple",
      "0.5 oz Sour Goose Green Apple",
      "0.25 oz lime juice",
      "Ice",
    ],
    method:
      "Shake Bang On Green Apple, Sour Goose Green Apple, and lime juice with ice. Strain into a shot glass.",
  },
  {
    name: "Blue Lagoon Shot",
    flavour: "Tropical",
    flavourColor: "#2596be",
    image: "/assets/blue-lagoon-bang.webp",
    ingredients: [
      "1 oz Tropical",
      "0.5 oz vodka",
      "0.25 oz fresh lime juice",
      "Splash of lemonade",
      "Ice",
    ],
    method:
      "Shake Tropical, vodka, lime juice, and a splash of lemonade with ice. Strain into a double shot glass.",
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
    name: "Pink Panther",
    flavour: "Ripe Raspberry",
    flavourColor: "#ff3672",
    image: "/assets/pink-panther.webp",
    ingredients: [
      "1.5 oz Ripe Raspberry",
      "1 oz gin",
      "4 oz tonic",
      "Fresh berries",
    ],
    method: "Build in a balloon glass over ice. Garnish with fresh berries.",
  },
  {
    name: "Green Light",
    flavour: "Bang On Green Apple",
    flavourColor: "#95cb00",
    image: "/assets/green-light.webp",
    ingredients: [
      "1.5 oz Bang On Green Apple",
      "1 oz Sour Goose Green Apple",
      "1 oz lemon juice",
      "Fresh lime",
      "Ice",
    ],
    method:
      "Build Bang On Green Apple and Sour Goose Green Apple in a highball glass over ice. Add lemon juice and stir. Top with soda water and garnish with fresh lime.",
  },
  {
    name: "Island Fizz",
    flavour: "Tropical",
    flavourColor: "#2596be",
    image: "/assets/island-fizz.webp",
    ingredients: [
      "1 oz Tropical",
      "0.5 oz orange juice",
      "0.5 oz pineapple juice",
      "3 oz sparkling wine",
      "Orange slice",
    ],
    method:
      "Add Tropical, orange juice, and pineapple juice to a champagne flute. Top with sparkling wine and garnish with an orange slice.",
  },
  {
    name: "Bang Bang Shot",
    flavour: "Both",
    flavourColor: "#f94a02",
    image: "/assets/bang-bang-shot.webp",
    ingredients: [
      "0.75 oz Big Banana",
      "0.75 oz Ripe Raspberry",
      "0.5 oz vodka",
      "Splash of lemon",
    ],
    method: "Shake all with ice. Strain into a double shot glass.",
  },
  {
    name: "Sunrise Bang",
    flavour: "Big Banana",
    flavourColor: "#f3db03",
    image: "/assets/sunrise-bang.webp",
    ingredients: ["1.5 oz Big Banana", "3 oz orange juice", "Grenadine", "Ice"],
    method:
      "Pour Big Banana and orange juice over ice. Slowly add grenadine for a sunrise effect.",
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
            className="text-xl md:text-2xl text-[#525252] max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Simple recipes. Maximum impact. These drinks hit different.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-28">
          {cocktails.map((cocktail) => (
            <motion.div
              key={cocktail.name}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full h-[420px] md:h-[520px]">
                <Image
                  src={cocktail.image}
                  alt={cocktail.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

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
                    {cocktail.ingredients.map((ingredient) => (
                      <li key={ingredient} className="body-text text-[#525252]">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="max-w-md">
                  <p className="text-sm uppercase text-[#737373] mb-2">
                    Method
                  </p>
                  <p className="body-text text-[#525252]">{cocktail.method}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-black text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-8">
          GOT THE RECIPES. NEED THE BANG.
        </h2>

        <Link
          href="/where-to-buy"
          className="inline-block bg-[#f94a02] text-white px-6 py-3 rounded hover:bg-[#f3db03] hover:text-black transition-colors duration-300"
        >
          FIND BANG ON →
        </Link>
      </section>

      <Footer />
    </main>
  )
}