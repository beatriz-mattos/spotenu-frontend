import React from 'react'
import { Typography } from '@material-ui/core'

const BandInfoItem = (props) => {
    return (
        <Typography variant={'body1'}>
            <strong>{props.infoName}</strong>: {props.info}
        </Typography>
    );
};

export default BandInfoItem;