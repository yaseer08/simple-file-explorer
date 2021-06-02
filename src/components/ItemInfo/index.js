import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Image
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import './ItemInfo.css';

//assets
import folder from '../../assets/img/folder.svg';
import file from '../../assets/img/file.svg';


const ItemInfo = ({ isOpen, info = {}, onClose }) => {
	console.log(info);
	return (
		<div>
			<Modal isOpen={isOpen} size={'sm'} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader m={'auto'}>{info.name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody m={'auto'}>
						<div className="info-wrapper">
							<div className="info-image">
								<Image
									m={"auto"}
									boxSize="70px"
									objectFit="cover"
									src={info.type === 'folder' ? folder : file}
									alt="item"
								/>
							</div>	
							<div className="info-content">
								<div className="info-item">
									<p>Name:</p>
									<p className="item-sub-text">{info.name}</p>
								</div>
								<div className="info-item">
									<p>Size:</p>
									<p className="item-sub-text">124Kb</p>
								</div>
								<div className="info-item">
									<p>Creator Name:</p>
									<p className="item-sub-text">Yaseer</p>
								</div>
								<div className="info-item">
									<p>Date:</p>
									<p className="item-sub-text">12 Dec 2019</p>
								</div>
							</div>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" m={'auto'} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default ItemInfo;