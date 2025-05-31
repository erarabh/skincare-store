// /app/page.tsx (Homepage)
'use client'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Glow Serum',
    price: '$29.99',
    image: '/serum.jpg',
    description: 'Brightens skin with natural ingredients.',
  },
  {
    id: 2,
    name: 'Daily Sunscreen',
    price: '$19.99',
    image: '/sunscreen.jpg',
    description: 'SPF 50+ protection for sensitive skin.',
  },
  {
    id: 3,
    name: 'Hydra Cream',
    price: '$24.99',
    image: '/face-cream.jpg',
    description: 'Deep hydration for dry skin.',
  },
]

export default function HomePage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🧴 Skincare Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow text-center"
            data-type="product"
          >
            <Image src={product.image} alt={product.name} width={300} height={300} className="mx-auto" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-purple-700 font-bold">{product.price}</p>
            <button className="mt-2 px-4 py-1 bg-purple-600 text-white rounded hover:bg-purple-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/faq" className="text-blue-600 underline">
          Visit our FAQ page
        </Link>
      </div>
    </main>
  )
}
