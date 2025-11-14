export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold">Service not found</h1>
      <p className="mt-2 opacity-70">
        Please check the link or browse all services.
      </p>
      <a className="mt-6 inline-block underline" href="/services">
        Back to Services
      </a>
    </div>
  );
}
