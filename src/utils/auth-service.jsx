import { useState } from 'react';

function useApi(endpoint, requestType, data) {
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const requestOptions = {
                method: requestType,
                headers: { 'Content-Type': 'application/json' },
                body: requestType === 'POST' ? JSON.stringify(data) : null,
            };

            const response = await fetch(endpoint, requestOptions);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setResponseData(responseData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const clearError = () => {
        setError(null);
    }

    const clearResponseData = () => {
        setResponseData(null);
    }

    return { responseData, loading, error, fetchData, clearError, clearResponseData };
}

export default useApi;
