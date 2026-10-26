import { profile, resume } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl text-white">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-mute">
            {profile.role} at {profile.school}. {profile.graduation}. {profile.location}.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
          <a className="quiet-link" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="quiet-link" href={profile.phoneHref}>
            Phone
          </a>
          <a className="quiet-link" href={profile.linkedinHref} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="quiet-link" href={resume.href} target="_blank" rel="noreferrer">
            View resume
          </a>
          <a className="quiet-link" href="#top">
            Back to top
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-mute">© 2026 {profile.name}. {profile.location}.</p>
    </footer>
  );
}
