export interface ApiResult<T> { data?: T; error?: string; }
export const handleApiError = (err: any): ApiResult<any> => ({ error: err.message });
