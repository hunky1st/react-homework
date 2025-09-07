import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseAPIKey = import.meta.env.VITE_SUPABASE_API_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAPIKey)
