// Base API URL - replace with your actual API endpoint
const BASE_URL = 'http://localhost:5000';

// Helper function for handling API responses
const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'API request failed');
    }
    return response.json();
};

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);
        return handleResponse(response);
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
};

// Common API methods
export const api = {
    get: (endpoint) => apiRequest(endpoint),
    
    post: (endpoint, data) => apiRequest(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    
    put: (endpoint, data) => apiRequest(endpoint, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
    
    delete: (endpoint) => apiRequest(endpoint, {
        method: 'DELETE',
    }),
};

export default api;