"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/common/Button";
import type { ContactFormField } from "@/types/content";
import style from "./index.module.scss";

type ContactFormProps = {
  title?: string;
  description?: string;
  submitLabel: string;
  fields: ContactFormField[];
  className?: string;
};

const ContactForm = ({
  title,
  description,
  submitLabel,
  fields,
  className = "",
}: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`theme-dark ${style.formCard} ${className}`.trim()}>
      {title ? <h3 className={`h3 ${style.formTitle}`}>{title}</h3> : null}
      {description ? <p className={style.formDesc}>{description}</p> : null}

      <form className={style.form} onSubmit={onSubmit}>
        <div className={`custom-row ${style.fields}`}>
          {fields.map((field) => {
            const id = `contact-${field.name}`;
            const isTextarea = field.type === "textarea";
            const wide =
              field.type === "textarea" || field.name === "subject";

            return (
              <div
                key={field.name}
                className={`col_12 ${wide ? "" : "col_md_6"}`}
              >
                <div className={style.field}>
                  <label htmlFor={id}>
                    {field.label}
                    {field.required ? " *" : ""}
                  </label>
                  {isTextarea ? (
                    <textarea
                      id={id}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      maxLength={field.maxLength}
                      rows={5}
                    />
                  ) : (
                    <input
                      id={id}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      maxLength={field.maxLength}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <Button type="submit" data-cursor="magnetic">
          {submitLabel}
        </Button>

        {submitted && (
          <p className={style.note} role="status">
            Form UI is ready. Backend submission will be connected later.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
