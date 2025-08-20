const getCurrentDateTime = () => {
  const now = new Date();

  // Adjust the time zone to avoid discrepancies
  const timezoneOffset = now.getTimezoneOffset() * 60000; // Convert to milliseconds
  const localISOTime = new Date(now.getTime() - timezoneOffset)
    .toISOString()
    .slice(0, 16); // Format: "YYYY-MM-DDTHH:MM"

  return localISOTime;
};

export { getCurrentDateTime };
