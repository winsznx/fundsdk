export const LogLevel = { INFO: "INFO", WARN: "WARN", ERROR: "ERROR" };
export const logInfo = (msg: string) => console.log(`[${LogLevel.INFO}] ${msg}`);
