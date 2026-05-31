"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/app/metadata";
import styles from "./Contact.module.css";

type FormStatus = "idle" | "sending" | "success" | "error";

const accessKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
  siteConfig.web3formsAccessKey.trim();

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Add a free Web3Forms key at web3forms.com."
      );
      return;
    }

    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: "Portfolio contact form",
          from_name: siteConfig.name,
          botcheck: "",
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (response.ok && result.success) {
        form.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
      setErrorMessage(
        result.message ||
          "Could not send your message. Please try again or email me directly."
      );
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection or email me directly."
      );
    }
  };

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Say Hello</h2>

        <div className={styles.card}>
          <div className={styles.layout}>
            <div className={styles.intro}>
              <p className={styles.subtitle}>
                Have a question, collaboration idea, or just want to connect?
                Send me a message and I&apos;ll get back to you.
              </p>
              <p className={styles.fallback}>
                Prefer email?{" "}
                <a href={`mailto:${siteConfig.links.email}`} className={styles.mailLink}>
                  {siteConfig.links.email}
                </a>
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <input
                type="checkbox"
                name="botcheck"
                className={styles.honey}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className={styles.fieldPair}>
                <div className={styles.fieldRow}>
                  <label className={styles.label} htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={styles.input}
                    autoComplete="name"
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <div className={styles.fieldRow}>
                  <label className={styles.label} htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={styles.input}
                    autoComplete="email"
                    required
                    disabled={status === "sending"}
                  />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <label className={styles.label} htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={styles.textarea}
                  rows={4}
                  required
                  disabled={status === "sending"}
                />
              </div>

              <div className={styles.actions}>
                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                {status === "success" && (
                  <p className={styles.feedbackSuccess} role="status">
                    Message sent — thanks! I&apos;ll reply soon.
                  </p>
                )}

                {status === "error" && (
                  <p className={styles.feedbackError} role="alert">
                    {errorMessage ||
                      "Couldn\u2019t send right now. Please try again or email me directly."}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
