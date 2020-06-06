import React from 'react';
import {CircularProgress} from "@material-ui/core";
import GenericMediaCard from "../../GenericMediaCard/GenericMediaCard";
import {connect} from "react-redux";

const RemoteMediaCard = ({remoteStream, remoteNickname}) => {
    return (
        <>
            {remoteStream
                ? <GenericMediaCard stream={remoteStream} user={{nickname: remoteNickname}} />
                : <CircularProgress color="inherit"/>
            }
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    const remotePeerId = ownProps.connection.peer;
    const remoteStream = remotePeerId ? state.streams.data[remotePeerId] : null;
    const remoteMetadata = state.peers.data[remotePeerId] ? state.peers.data[remotePeerId].metadata : {};
    return {
        remoteStream: remoteStream,
        remoteNickname: remoteMetadata.nickname || 'missing Nickname',
    }
};

export default connect(mapStateToProps)(RemoteMediaCard);
