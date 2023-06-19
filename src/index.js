import { serve } from "https://deno.land/std/http/mod.ts";
import Data from './data.json';

serve((_) => Response.json({ success: true, data: Data}));