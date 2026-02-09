"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type LeadType = "investor" | "operator";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  errors: string[];
}

function ContactForm({ leadType }: { leadType: LeadType }) {
  const [state, setState] = useState<FormState>({ status: "idle", errors: [] });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "submitting", errors: [] });

    const fd = new FormData(e.currentTarget);
    const payload = {
      type: leadType,
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      company: fd.get("company") as string,
      message: (fd.get("message") as string) || undefined,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        const errors =
          body && Array.isArray(body.errors)
            ? (body.errors as string[])
            : ["Something went wrong. Please try again."];
        setState({ status: "error", errors });
        return;
      }

      setState({ status: "success", errors: [] });
    } catch {
      setState({ status: "error", errors: ["Network error. Please try again."] });
    }
  }

  if (state.status === "success") {
    return (
      <div className="py-12 text-center" role="status">
        <p className="text-lg font-semibold">Thank you.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {leadType === "investor"
            ? "We\u2019ll send investor materials to your email shortly."
            : "We\u2019ll be in touch to schedule your pilot walkthrough."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor={`${leadType}-name`}>Full name</Label>
        <Input id={`${leadType}-name`} name="name" required autoComplete="name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${leadType}-email`}>Work email</Label>
        <Input id={`${leadType}-email`} name="email" type="email" required autoComplete="email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${leadType}-company`}>Company</Label>
        <Input id={`${leadType}-company`} name="company" required autoComplete="organization" />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${leadType}-message`}>
          {leadType === "investor" ? "What materials are you looking for?" : "Tell us about your operation"}
        </Label>
        <Textarea id={`${leadType}-message`} name="message" rows={4} />
      </div>

      {state.status === "error" && (
        <div role="alert" className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          <ul className="list-inside list-disc">
            {state.errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={state.status === "submitting"}>
        {state.status === "submitting"
          ? "Sending\u2026"
          : leadType === "investor"
            ? "Request investor materials"
            : "Request pilot access"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We reply within one business day. No spam.
      </p>
    </form>
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
                <ContactForm leadType="investor" />
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
                <ContactForm leadType="operator" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
