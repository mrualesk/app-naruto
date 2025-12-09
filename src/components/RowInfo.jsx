import React from 'react';

export default function RowInfo({label, value}) {
    return (
        <div className="flex flex-row">
            {value && <div className="ml-8 w-30 font-bold">{label}:</div>}
            {value && <div className="w-auto">{value}</div>}
        </div>
    );
};