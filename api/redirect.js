// /api/redirect.js
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  'https://your-project-url.supabase.co',  // Replace with your Supabase project URL
  'your-public-anon-key'                   // Replace with your Supabase public API key
);

export default async function handler(req, res) {
  const { project_id, survey_id } = req.query;

  if (!project_id || !survey_id) {
    return res.status(400).json({ message: 'Missing project_id or survey_id' });
  }

  try {
    // Step 1: Check if the project_id exists in your database
    const { data: projectData, error: projectError } = await supabase
      .from('project')
      .select('*')
      .eq('kp_project_id', project_id)
      .single();

    if (projectError || !projectData) {
      return res.redirect(`https://survey.kphotone.com/terminate.html?project_id=${project_id}&survey_id=${survey_id}`);
    }

    // Step 2: Check if the supplier exists for the given survey_id
    const { data: supplierData, error: supplierError } = await supabase
      .from('supplier_redirect')
      .select('*')
      .eq('survey_id', survey_id)
      .single();

    if (supplierError || !supplierData) {
      // If no supplier is found, route to internal KPhotone's terminate page
      return res.redirect(`https://survey.kphotone.com/terminate.html?project_id=${project_id}&survey_id=${survey_id}`);
    }

    // Step 3: Redirect based on the supplier's redirect URL
    return res.redirect(supplierData.qualified_url);  // or terminate_url, quota_full_url based on your logic

  } catch (error) {
    console.error('Error handling the redirect:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
