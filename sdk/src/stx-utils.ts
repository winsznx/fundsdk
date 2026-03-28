export const microStxToStx = (micro: number) => micro / 1000000;
export const stxToMicroStx = (stx: number) => Math.floor(stx * 1000000);
export const isValidPrincipal = (addr: string) => /^(S[PM])[a-zA-Z0-9]{37,39}$/.test(addr);
export const isMainnetAddress = (addr: string) => addr.startsWith("SP");
export const isTestnetAddress = (addr: string) => addr.startsWith("ST");
