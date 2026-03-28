export const LogLevel = { INFO: "INFO", WARN: "WARN", ERROR: "ERROR" };
export const logInfo = (msg: string) => console.log(`[${LogLevel.INFO}] ${msg}`);
export const logWarn = (msg: string) => console.warn(`[${LogLevel.WARN}] ${msg}`);
