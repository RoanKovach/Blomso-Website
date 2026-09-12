"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type LeadType = "investor" | "operator";

/** The one contact channel for the site. */
const CONTACT_EMAIL = "kalib@blomso.com";

/**
 * The fields compose a prefilled message. There is no backend on the static
 * export, so the call to action is a plain mailto link rather than a submit.
 */
function ContactDetails({ leadType }: { leadType: LeadType }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const subject =
    leadType === "investor"
      ? "Investor materials request"
      : "Pilot walkthrough request";

  const body = [
    name && `Name: ${name}`,
    email && `Email: ${email}`,
    company && `Company: ${company}`,
    message && `\n${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor={`${leadType}-name`}>Full name</Label>
        <Input
          id={`${leadType}-name`}
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${leadType}-email`}>Work email</Label>
        <Input
          id={`${leadType}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${leadType}-company`}>Company</Label>
        <Input
          id={`${leadType}-company`}
          name="company"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${leadType}-message`}>
          {leadType === "investor"
            ? "What materials are you looking for?"
            : "Tell us about your operation"}
        </Label>
        <Textarea
          id={`${leadType}-message`}
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button asChild className="w-full">
        <a href={href}>{CONTACT_EMAIL}</a>
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We reply within one business day. No spam.
      </p>
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
        Choose the path that fits. We&apos;ll respond within one business day.
      </p>

      <Tabs defaultValue="investor" className="mt-10 sm:mt-12">
        <TabsList className="grid h-11 w-full grid-cols-2 sm:h-9">
          <TabsTrigger
            value="investor"
            className="data-[state=active]:border-primary data-[state=active]:font-semibold data-[state=inactive]:text-muted-foreground/60"
          >
            Investor
          </TabsTrigger>
          <TabsTrigger
            value="operator"
            className="data-[state=active]:border-primary data-[state=active]:font-semibold data-[state=inactive]:text-muted-foreground/60"
          >
            Operator
          </TabsTrigger>
        </TabsList>

        <TabsContent value="investor" className="mt-6" forceMount={undefined}>
          <div
            key="investor"
            className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-200"
          >
            <Card>
              <CardHeader>
                <CardTitle>Request investor materials</CardTitle>
                <CardDescription>
                  Receive our deck, data room summary, and key metrics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactDetails leadType="investor" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="operator" className="mt-6" forceMount={undefined}>
          <div
            key="operator"
            className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-200"
          >
            <Card>
              <CardHeader>
                <CardTitle>Request a pilot</CardTitle>
                <CardDescription>
                  Tell us about your operation and we&apos;ll set up a tailored walkthrough.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactDetails leadType="operator" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
