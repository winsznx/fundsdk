export interface ApiResult<T> { data?: T; error?: string; }
export const handleApiError = (err: any): ApiResult<any> => ({ error: err.message });
export const fetchWrapper = async (url: string) => fetch(url).then(r => r.json());
