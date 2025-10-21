import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Api from './Api';

const ReactApp = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/posts');  // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error('Poor network response');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map(item => (
                <div key={item.id} className="p-4 border rounded shadow">
                    <h2 className="font-bold text-lg">{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
            <Footer />
            <Api />
        </div>
    );
};

export default ReactApp;