import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function TodoPreview({description, modal, toggle}: { description: string; modal:boolean, toggle:React.MouseEventHandler<HTMLButtonElement> }) {

  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Preview</ModalHeader>
            <ModalBody>
                {description}
            </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={toggle}>
                Do Something
            </Button>
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
  );
}

export default TodoPreview;
