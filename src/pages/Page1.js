import React, { useEffect, useState } from 'react';

function getExternalProcessId(){
    return 'abc123';
}

function stopExternalProcess(processId){
    alert(`stopping process ${processId}`);
}

export default function Page1() {
    const [ processId, setProcessId ] = useState(null);

    useEffect(() => {
        // Anything in here is fired on component mount.
        setProcessId( getExternalProcessId() );
        return () => {
            // Anything in here is fired on component unmount.
            stopExternalProcess(processId);
        }
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                Page 1
            </h1>
            <h2>Executing process id: {processId}</h2>
        </div>
    );
}