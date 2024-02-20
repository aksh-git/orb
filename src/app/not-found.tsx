import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-12 h-96 container font-sans flex flex-col justify-center items-center gap-3">
      <span className="text-9xl font-extrabold text-primary">404</span>
      <p className="text-2xl font-semibold">
        PAGE NOT FOUND
      </p>
      <Link
        className="mt-4 py-1 lg:py-2 px-10 lg:px-14 rounded-full bg-accent cursor-pointer text-background font-semibold uppercase btn-primary"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
