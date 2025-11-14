import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold">Project not found</h1>
      <p className="mt-2 opacity-70">
        The project you’re looking for doesn’t exist.
      </p>
      <Link
        href="/projects"
        className="text-primary underline mt-6 inline-block"
      >
        Back to Projects
      </Link>
    </div>
  );
}
