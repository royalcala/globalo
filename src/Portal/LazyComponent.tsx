import React from 'react'
export function LazyComponent({ Component }: any) {
    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>} >
                <Component />
            </React.Suspense>
        </div>
    );
}