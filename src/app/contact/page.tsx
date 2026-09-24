"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

/** The one contact channel for the site. */
const CONTACT_EMAIL = "kalib@blomso.com";

type ContactPath = {
  id: string;
  /** Who the path is for, shown on the tab. */
  audience: string;
  /** The action, used as the card title, the button label and the subject. */
  action: string;
  description: string;
  messageLabel: string;
};

const CONTACT_PATHS: ContactPath[] = [
  {
    id: "agronomist",
    audience: "Agronomist or crop consultant",
    action: "See the Zone Builder on your fields",
    description: "Tell us which fields you work on and we’ll walk through the Zone Builder on them.",
    messageLabel: "Tell us about the fields you work on",
  },
  {
    id: "grower",
    audience: "Grower or operator",
    action: "Request a pilot",
    description: "Tell us about your operation and we’ll set up a tailored walkthrough.",
    messageLabel: "Tell us about your operation",
  },
  {
    id: "partner",
    audience: "Lab, software or research partner",
    action: "Work with us",
    description: "Tell us what you work on and where it could connect.",
    messageLabel: "What are you working on?",
  },
  {
    id: "investor",
    audience: "Investor",
    action: "Request investor materials",
    description: "Receive our deck, data room summary, and key metrics.",
    messageLabel: "What materials are you looking for?",
  },
];

/**
 * The fields compose a prefilled message. There is no backend on the static
 * export, so the call to action is a plain mailto link rather than a submit.
 */
function ContactDetails({ path }: { path: ContactPath }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const body = [
    name && `Name: ${name}`,
    email && `Email: ${email}`,
    company && `Company: ${company}`,
    message && `\n${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(path.action)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor={`${path.id}-name`}>Full name</Label>
        <Input
          id={`${path.id}-name`}
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${path.id}-email`}>Work email</Label>
        <Input
          id={`${path.id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${path.id}-company`}>Company</Label>
        <Input
          id={`${path.id}-company`}
          name="company"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${path.id}-message`}>{path.messageLabel}</Label>
        <Textarea
          id={`${path.id}-message`}
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div>
        <Button asChild className="w-full">
          <a href={href}>{path.action}</a>
        </Button>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Opens an email to {CONTACT_EMAIL}
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Get in touch
      </h1>
      <p className="mt-4 text-base text-muted-foreground sm:text-lg">
        Choose the path that fits.
      </p>

      <Tabs defaultValue={CONTACT_PATHS[0].id} className="mt-10 sm:mt-12">
        <TabsList className="grid w-full grid-cols-2 gap-1 group-data-[orientation=horizontal]/tabs:h-auto sm:grid-cols-4">
          {CONTACT_PATHS.map((path) => (
            <TabsTrigger
              key={path.id}
              value={path.id}
              className="h-full min-h-11 whitespace-normal py-2 leading-tight data-[state=active]:border-primary data-[state=active]:font-semibold data-[state=inactive]:text-muted-foreground/60"
            >
              {path.audience}
            </TabsTrigger>
          ))}
        </TabsList>

        {CONTACT_PATHS.map((path) => (
          <TabsContent key={path.id} value={path.id} className="mt-6">
            <div
              key={path.id}
              className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-200"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{path.action}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactDetails path={path} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        We reply within one business day. No spam.
      </p>
    </div>
  );
}
