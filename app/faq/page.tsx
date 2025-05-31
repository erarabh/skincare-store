// /app/faq/page.tsx
'use client'
export default function FAQPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">❓ Frequently Asked Questions</h1>
      <div data-type="faq" className="space-y-4">
        <div>
          <h2 className="font-semibold">What is your return policy?</h2>
          <p>You can return products within 30 days if unopened and unused.</p>
        </div>
        <div>
          <h2 className="font-semibold">Do you offer international shipping?</h2>
          <p>Yes, we ship worldwide with standard and express options.</p>
        </div>
        <div>
          <h2 className="font-semibold">Are your products cruelty-free?</h2>
          <p>All our products are 100% cruelty-free and ethically sourced.</p>
        </div>
      </div>
    </main>
  )
}