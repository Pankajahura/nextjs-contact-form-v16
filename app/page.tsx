import Contact from '@/components/contact';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact Form
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Send us a message or manage your contacts
        </p>
        <div className="text-center">
          <Link
            href="/contacts"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            View Contacts Manager
          </Link>
        </div>
      </div>
      <Contact />
    </main>
  );
}
