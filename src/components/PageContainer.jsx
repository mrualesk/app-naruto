import React from 'react';

export default function PageContainer({children}) {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            {children}
        </div>
    );
};
