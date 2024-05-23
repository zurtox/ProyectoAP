import { activateContent, deactivateContent } from './Content.js';
import supabase from '../config/supabaseClient.js';

async function functionalTest() {
  const contentId = 1; // assuming the content ID is 1

  // Step 1: Activate the Content
  console.log('Activating the Content...');
  let result = await activateContent(contentId);
  console.log('Activate result:', result);

  if (result.error) {
    console.error('Error activating Content:', result.error);
    return;
  }

  // Step 2: Confirm the Content has been activated
  console.log('Confirming the Content has been activated...');
  let { data, error } = await supabase
    .from('Content')
    .select('active')
    .eq('id', contentId);
  console.log('Confirm activation result:', { data, error });

  if (error || data[0].active !== true) {
    console.error('Content was not activated.');
    return;
  }

  // Step 3: Deactivate the Content
  console.log('Deactivating the Content...');
  result = await deactivateContent(contentId);
  console.log('Deactivate result:', result);

  if (result.error) {
    console.error('Error deactivating Content:', result.error);
    return;
  }

  // Step 4: Confirm the Content has been deactivated
  console.log('Confirming the Content has been deactivated...');
  ({ data, error } = await supabase
    .from('Content')
    .select('active')
    .eq('id', contentId));
  console.log('Confirm deactivation result:', { data, error });

  if (error || data[0].active !== false) {
    console.error('Content was not deactivated.');
    return;
  }

  console.log('Content activation and deactivation test completed successfully.');
}

functionalTest();
