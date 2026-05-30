export default function Loading() {
  return (
    <div className="bg-neutral">
      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-64 animate-pulse rounded-md bg-white/10" />
          <div className="mt-4 h-6 w-96 max-w-full animate-pulse rounded-md bg-white/10" />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="h-10 w-32 animate-pulse rounded-md bg-border" />
              <div className="h-12 w-64 animate-pulse rounded-md bg-border" />
              <div className="space-y-3">
                <div className="h-4 w-full animate-pulse rounded-md bg-border" />
                <div className="h-4 w-5/6 animate-pulse rounded-md bg-border" />
                <div className="h-4 w-4/6 animate-pulse rounded-md bg-border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 animate-pulse rounded-lg bg-border" />
                <div className="h-24 animate-pulse rounded-lg bg-border" />
                <div className="h-24 animate-pulse rounded-lg bg-border" />
                <div className="h-24 animate-pulse rounded-lg bg-border" />
              </div>
            </div>
            <div className="aspect-square animate-pulse rounded-lg bg-border" />
          </div>
        </div>
      </section>
    </div>
  );
}