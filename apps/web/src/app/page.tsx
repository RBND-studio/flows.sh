import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  alternates: { canonical: "https://flows.sh" },
};

export default function Page(): JSX.Element {
  return (
    <div className="container">
      <header>
        <Image
          alt="Halo illustration"
          className="halo"
          height={200}
          priority
          src="/images/halo.png"
          width={800}
        />
        <h1>Onboarding for modern SaaS</h1>
        <p className="caption">
          A better way to <b>onboard users</b> and drive <b>product adoption</b>.
        </p>
      </header>
      <main>
        <form className="waitlist-form">
          <input name="email" placeholder="Email address" required type="email" />
          <button className="btn primary" type="submit">
            Join waitlist
          </button>
        </form>
        <hr />
        <div className="conditional-step mb80">
          <h2>Conditional step</h2>
          <div className="flow-preview">
            <form>
              <select aria-label="Example select" defaultValue="">
                <option disabled value="">
                  Select...
                </option>
                <option value={1}>Option A</option>
                <option value={2}>Option B</option>
              </select>{" "}
              <button className="btn secondary" type="submit">
                Submit
              </button>
            </form>
            <div className="flow-overlay">
              <button
                className="btn preview start-flow"
                data-flowid="conditional-step"
                type="button"
              >
                <Image alt="Play icon" height={20} src="/images/play.svg" width={20} />
                Launch flow
              </button>
            </div>
          </div>
          <div className="flow-state">
            <div className="step-block" data-step={0}>
              Tooltip
            </div>
            <Image alt="Straight arrow" height={8} src="/images/arrow-straight.svg" width={25} />
            <div className="step-block" data-step={1}>
              Wait
            </div>
            <Image
              alt="Arrow fork to Value A and Value B"
              height={82}
              src="/images/arrow-fork.svg"
              width={102}
            />
            <div className="flow-state-variant">
              <div className="step-block" data-step="2,0,0">
                Variant A
              </div>
              <div className="step-block" data-step="2,1,0">
                Variant B
              </div>
            </div>
          </div>
          <p>
            With conditional steps, you can show different steps based on the user&apos;s input,
            their segmentation, or any other condition. Conditional flows are infinitely nestable
            and can be used to create complex flows.
          </p>
        </div>
        <div className="wait-step mb80">
          <h2>Wait step</h2>
          <div className="flow-preview">
            <form>
              <button className="btn secondary" id="wait-button-A" type="button">
                Click me!
              </button>{" "}
              <button className="btn secondary" id="wait-button-B" type="button">
                Now click me!
              </button>
            </form>
            <div className="flow-overlay">
              <button className="btn preview start-flow" data-flowid="wait-step" type="button">
                <Image alt="Play icon" height={20} src="/images/play.svg" width={20} />
                Launch flow
              </button>
            </div>
          </div>
          <div className="flow-state">
            <div className="step-block" data-step={0}>
              Tooltip
            </div>
            <Image alt="Straight arrow" height={8} src="/images/arrow-straight.svg" width={25} />
            <div className="step-block" data-step={1}>
              Wait for button click
            </div>
            <Image alt="Straight arrow" height={8} src="/images/arrow-straight.svg" width={25} />
            <div className="step-block" data-step={2}>
              Tooltip
            </div>
          </div>
          <p>
            Wait steps are useful for giving users time to complete a task before showing the next
            step. You can wait for a specific amount of time or until the user completes a specific
            action. Then the flow will continue automatically.
          </p>
        </div>
        <div className="mb80">
          <h2>Call step</h2>
          <div className="flow-preview">
            <div className="flow-overlay">
              <p className="placeholder">No preview</p>
            </div>
          </div>
          <div className="flow-state">
            <div className="step-block" data-step={0}>
              Tooltip
            </div>
            <Image alt="Straight arrow" height={8} src="/images/arrow-straight.svg" width={25} />
            <div className="step-block" data-step={1}>
              Open a dropdown menu
            </div>
            <Image alt="Straight arrow" height={8} src="/images/arrow-straight.svg" width={25} />
            <div className="step-block" data-step={2}>
              Tooltip
            </div>
          </div>
          <p>
            Call steps are versatile steps that can be used to trigger any action such as opening a
            dropdown menu, changing a state in UI, or anything else that you can do with JavaScript.
            Call steps give you the control to create any flow you can imagine.
          </p>
        </div>
        <div className="mb80">
          <h2>Modern onboarding platform</h2>
          <div className="feature-grid">
            <div className="feature">
              <div className="feature-title">
                <div className="icon lightning" />
                <h3>Fast and lightweight</h3>
              </div>
              <p>Native-like performance and small bundle size.</p>
            </div>
            <div className="feature">
              <div className="feature-title">
                <div className="icon settings" />
                <h3>Fully customizable</h3>
              </div>
              <p>Create flows that look native with documented stylesheets.</p>
            </div>
            <div className="feature">
              <div className="feature-title">
                <div className="icon chart" />
                <h3>Flow analytics</h3>
              </div>
              <p>Track how users interact with your flows and improve them.</p>
            </div>
            <div className="feature">
              <div className="feature-title">
                <div className="icon crosshair" />
                <h3>Opinionated</h3>
              </div>
              <p>The only way to create great products. No fluff, bloat, or bs.</p>
            </div>
            <div className="feature">
              <div className="feature-title">
                <div className="icon fork" />
                <h3>Open source</h3>
              </div>
              <p>The core will be open with paid access to our cloud service.</p>
            </div>
          </div>
        </div>
        <div className="bottom-cta" id="cta">
          <h2>Join the waitlist</h2>
          <form className="waitlist-form">
            <input name="email" placeholder="Email address" required type="email" />
            <button className="btn primary" type="submit">
              Join waitlist
            </button>
          </form>
        </div>
      </main>
      <footer>
        <p>
          Made by{" "}
          <a href="https://rbnd.studio" rel="noreferrer" target="_blank">
            RBND
          </a>{" "}
          •{" "}
          <a href="https://github.com/RBND-studio" rel="noreferrer" target="_blank">
            Github
          </a>
        </p>
        <p className="footnote">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </p>
      </footer>
      <Script src="/poc/index.js" type="module" />
    </div>
  );
}
