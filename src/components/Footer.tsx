export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8 text-center text-sm text-gray-500">
      <div className="mx-auto max-w-6xl px-4">
        <p>&copy; {new Date().getFullYear()} CertPrep. Free exam preparation resources.</p>
        <p className="mt-1">
          Not affiliated with IMA or any certification body.
        </p>
      </div>
    </footer>
  );
}
