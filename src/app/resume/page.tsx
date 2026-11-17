import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Resume | ${profile.name}`,
  description: `Resume of ${profile.name}, ${profile.designation}.`,
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <h1 className="mt-6 font-heading text-3xl font-extrabold sm:text-4xl">
        <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
          Resume
        </span>
      </h1>
      <p className="mt-2 text-muted">
        {profile.name} · {profile.designation}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={profile.resume} download={profile.resumeFileName}>
          <Download className="h-4 w-4" />
          Download CV
        </Button>
        <Button
          href={profile.resume}
          variant="outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-4 w-4" />
          Open in new tab
        </Button>
      </div>

      {/* Tablet and desktop: embedded preview */}
      <div className="mt-8 hidden overflow-hidden rounded-2xl border border-border bg-surface shadow-sm md:block">
        <object
          data={`${profile.resume}#view=FitH`}
          type="application/pdf"
          className="h-[80vh] w-full"
        >
          <p className="p-8 text-center text-muted">
            Your browser can’t preview PDFs here. Use the buttons above to open or
            download the resume.
          </p>
        </object>
      </div>

      {/* Phones: inline PDF preview isn't reliable, so point to the buttons */}
      <div className="mt-8 rounded-2xl border border-border bg-surface p-6 text-center text-sm text-muted md:hidden">
        PDF preview works best on larger screens. Use the buttons above to open or
        download my resume.
      </div>
    </main>
  );
}