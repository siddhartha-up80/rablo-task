// api.js
export const fetchEmployeeData = async () => {
  try {
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch employee data");
  }
};
