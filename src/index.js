import { serve } from "https://deno.land/std/http/mod.ts";
serve((_) => Response.json({ text: "Hello world from Deno!" }));