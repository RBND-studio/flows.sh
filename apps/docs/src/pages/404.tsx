import Link from "next/link";

export default function Custom404(): JSX.Element {
  return (
    <div className="grid">
      <div className="flex">
        <h1>404 - Not found</h1>
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
          gap: 1rem;
        }
        h1 {
          font-size: 2rem;
          font-weight: bold;
        }
        .link {
          color: var(--colors-text-primary);
          font-weight: 600;
          font-size: 1.25rem;
        }
        .link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
