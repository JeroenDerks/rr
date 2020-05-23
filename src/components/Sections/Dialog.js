import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';

export default function DialogWindow({ fullScreenImg, handleClose, open }) {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={false}
      style={{ margin: 0 }}
    >
      <MuiDialogContent style={{ padding: 4 }}>
        <img
          src={fullScreenImg}
          alt={'full screen'}
          style={{ maxHeight: '90vh', maxWidth: '90vw' }}
        />
      </MuiDialogContent>
    </Dialog>
  );
}
