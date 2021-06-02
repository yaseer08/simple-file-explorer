import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { addNewItem } from '../../redux/actions/fileFolderActions';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";

import { useDispatch } from 'react-redux';

import AddForm from "../AddForm";

const AddItem = ({ isOpen = false, ancestors = [], onClose }) => {
  const dispatch = useDispatch();

  const [itemType, setItemType] = useState('file')

  const handleSubmit = (formOutput) => {
    const payload = {
      obj: {},
      ancestors: ancestors,
      name: formOutput.name,
      type: itemType
    }
    dispatch(addNewItem(payload));
    onClose();
  }
  return (
    <div>
      <Modal isOpen={isOpen} size={"md"} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m={"auto"}>Create New</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs align="center" variant="solid-rounded" colorScheme="linkedin">
              <TabList>
                <Tab onClick={() => setItemType('file')}>File</Tab>
                <Tab onClick={() => setItemType('folder')}>Folder</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <AddForm  handleSubmit={handleSubmit}/>
                </TabPanel>
                <TabPanel>
                  <AddForm  handleSubmit={handleSubmit} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddItem;
