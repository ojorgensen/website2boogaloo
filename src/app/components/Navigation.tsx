import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
          Your Name
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link href="/writing" className="text-gray-600 hover:text-gray-800">
            Writing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 