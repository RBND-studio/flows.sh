import Link from "next/link";
import type { JSX } from "react";
import { Logo } from "ui";

export default function Custom404(): JSX.Element {
  return (
    <div className="grid">
      <div className="flex">
        <Logo type="pill" />
        <h1>Page not found</h1>
        <p className="description">The page you’re trying to access does not exist.</p>
        <p className="link">
          <Link href="/">Go back home</Link>
        </p>
      </div>
      <style
        // eslint-disable-next-line react/no-unknown-property -- not true
        jsx
      >{`
        .grid {
          display: grid;
          place-items: center;
          height: 100vh;
        }
        .flex {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        h1 {
          margin-top: 12px;
          font-size: 1.6rem;
          font-weight: bold;
        }
        .description {
          font-size: 1rem;
        }
        .link {
          margin-top: 16px;
          color: var(--colors-text-primary);
          font-weight: 600;
          font-size: 1rem;
        }
        .link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
