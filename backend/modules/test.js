import { 
  getAllPersonHolders, 
  getPersonHolderById, 
  insertPersonHolder, 
  updatePersonHolder, 
  deletePersonHolder 
} from './PersonHolder.js';

async function testPersonHolderFunctions() {
  console.log("Testing getAllPersonHolders...");
  let { data, error } = await getAllPersonHolders();
  if (error) {
      console.error("Error fetching all PersonHolders:", error);
  } else {
      console.log("All PersonHolders:", data);
  }

  console.log("\nTesting insertPersonHolder...");
  const newPerson = { firstName: "John", secondName: "Doe", firstLastName: "Smith", secondLastName: "Johnson" };
  ({ data, error } = await insertPersonHolder(newPerson.firstName, newPerson.secondName, newPerson.firstLastName, newPerson.secondLastName));
  if (error) {
      console.error("Error inserting PersonHolder:", error);
  } else {
      console.log("Inserted PersonHolder:", data);
      const newPersonId = data[0].id;

      console.log("\nTesting getPersonHolderById...");
      ({ data, error } = await getPersonHolderById(newPersonId));
      if (error) {
          console.error("Error fetching PersonHolder by ID:", error);
      } else {
          console.log("PersonHolder by ID:", data);
      }

      console.log("\nTesting updatePersonHolder...");
      const updatedPerson = { firstName: "Jane", secondName: "Doe", firstLastName: "Smith", secondLastName: "Johnson" };
      ({ data, error } = await updatePersonHolder(newPersonId, updatedPerson.firstName, updatedPerson.secondName, updatedPerson.firstLastName, updatedPerson.secondLastName));
      if (error) {
          console.error("Error updating PersonHolder:", error);
      } else {
          console.log("Updated PersonHolder:", data);
      }

      console.log("\nTesting deletePersonHolder...");
      ({ data, error } = await deletePersonHolder(newPersonId));
      if (error) {
          console.error("Error deleting PersonHolder:", error);
      } else {
          console.log("Deleted PersonHolder:", data);
      }
  }
}

testPersonHolderFunctions();
