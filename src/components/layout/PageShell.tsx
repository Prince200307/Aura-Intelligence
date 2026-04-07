export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-16 md:pt-16 pb-16 md:pb-16 mx-auto max-w-[1120px] px-4 md:px-12">
      {children}
    </main>
  );
}
