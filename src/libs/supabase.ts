import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/schema";

export const supabase = createClient<Database>(
  process.env.SUPABASE_PROJECT_URL ?? "",
  process.env.SUPABASE_API_KEY ?? ""
);
