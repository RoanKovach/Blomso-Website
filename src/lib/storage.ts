/**
 * Placeholder storage adapter for lead submissions.
 *
 * Replace the `saveLead` implementation with your real persistence layer
 * (database, CRM API, etc.) when ready. The interface stays the same.
 */

export interface LeadRecord {
  id: string;
  type: "investor" | "operator";
  name: string;
  email: string;
  company: string;
  message?: string;
  createdAt: string;
}

// In-memory store — survives only for the lifetime of the process.
const store: LeadRecord[] = [];

export async function saveLead(
  lead: Omit<LeadRecord, "id" | "createdAt">,
): Promise<LeadRecord> {
  const record: LeadRecord = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  store.push(record);

  console.log("[storage] lead saved:", record.id, record.type, record.email);

  return record;
}

/** Retrieve all stored leads (useful for debugging). */
export async function getLeads(): Promise<LeadRecord[]> {
  return [...store];
}
