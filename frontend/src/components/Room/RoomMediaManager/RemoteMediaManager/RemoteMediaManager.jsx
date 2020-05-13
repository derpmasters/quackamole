import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import RemoteMediaCard from "../RemoteMediaCard/RemoteMediaCard";

const RemoteMediaManager = ({connections}) => {
    return (
        <>
            {connections && connections.map(connection => <RemoteMediaCard key={connection.connectionId} connection={connection} />)}
        </>
    );
};

const mapStateToProps = state => ({
    connections: Object.values(state.connections.data)
});

export default connect(mapStateToProps)(RemoteMediaManager);
