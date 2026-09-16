import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest2 text-accent-dark">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-ash">
          The page you're looking for doesn't exist. It may have moved, or
          the link may be out of date.
        </p>
        <div className="mt-9 flex justify-center gap-4">
          <Button href="/stock" variant="primary">
            View Our Stock
          </Button>
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
