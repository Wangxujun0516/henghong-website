export default function Loading() {
  return (
    <div className="bg-white">
      <section className="border-b border-border bg-neutral py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-48 animate-pulse rounded-md bg-border" />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="aspect-square animate-pulse rounded-lg bg-border" />
            <div className="space-y-6">
              <div className="h-4 w-24 animate-pulse rounded-md bg-border" />
              <div className="h-10 w-3/4 animate-pulse rounded-md bg-border" />
              <div className="h-6 w-1/2 animate-pulse rounded-md bg-border" />
              <div className="space-y-3">
                <div className="h-4 w-full animate-pulse rounded-md bg-border" />
                <div className="h-4 w-5/6 animate-pulse rounded-md bg-border" />
                <div className="h-4 w-4/6 animate-pulse rounded-md bg-border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-16 animate-pulse rounded-lg bg-border" />
                <div className="h-16 animate-pulse rounded-lg bg-border" />
                <div className="h-16 animate-pulse rounded-lg bg-border" />
                <div className="h-16 animate-pulse rounded-lg bg-border" />
              </div>
              <div className="h-12 w-48 animate-pulse rounded-md bg-border" />
            </div>
          </div>
          <div className="mt-16 space-y-4">
            <div className="h-8 w-64 animate-pulse rounded-md bg-border" />
            <div className="h-4 w-full animate-pulse rounded-md bg-border" />
            <div className="h-4 w-5/6 animate-pulse rounded-md bg-border" />
            <div className="h-4 w-4/6 animate-pulse rounded-md bg-border" />
          </div>
        </div>
      </section>
    </div>
  );
}