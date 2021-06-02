import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuButton, MenuList, MenuItem, Image, Tooltip } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'

//assets
import folder from '../../assets/img/folder.svg';
import file from '../../assets/img/file.svg';

//redux file imports
import { deleteItem } from '../../redux/actions/fileFolderActions';
import { setAncestors } from '../../redux/actions/ancestorsAction';
import getItemDetails from '../../redux/actions/itemDetails';
import { getFileFolderInitialList } from '../../redux/actions/fileFolderActions';

//components
import ItemInfo from '../ItemInfo';
import AddItem from '../AddItem';
import './MainContent.css';


function MainContent() {
    const dispatch = useDispatch();
    
    const [showInfo, setShowInfo] = useState(false);
    const [infoData, setInfoData] = useState({});
    const [showAddModal, setshowAddModal] = useState(false);

    const ancestors = useSelector((state) => state.ancestors);
    const activeData = useSelector((state) => state.activeData);
    const dataList = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(getItemDetails());
    }, [dispatch]);


    useEffect(
        () => {
            dispatch(getFileFolderInitialList());
        },
        [dataList, dispatch]
    );

    const getInfo = (item) => {
        const details = {
            name: item,
            size: '124Kb',
            type: typeof activeData[item] === 'object' ? 'folder' : 'file'
        };
        setInfoData(details);
        setShowInfo(true);
    };

    const createNewFolder = () => {
        setshowAddModal(true);
    }
    return (
        <div className="main-content">
            {Object.keys(activeData).map((item, index) => {
                return (
                    <div key={index}>
                        <Menu placement="bottom-start">
                            <Tooltip closeDelay={500} isDisabled={((item).length < 11)} hasArrow label={item} bg="blackAlpha.900" color="white">
                                <MenuButton className="item-button">
                                    <div>
                                        <Image
                                            boxSize="70px"
                                            objectFit="cover"
                                            src={typeof activeData[item] === 'object' ? folder : file}
                                            alt="item"
                                        />
                                        <span>{((item).length > 10) ?
                                            (((item).substring(0, 10 - 3)) + '...') :
                                            item}</span>
                                    </div>
                                </MenuButton>
                            </Tooltip>
                            <MenuList>
                                <MenuItem
                                    onClick={() => {
                                        dispatch(setAncestors(ancestors.concat(item)));
                                        dispatch(getItemDetails(ancestors.concat(item)));
                                    }}
                                >
                                    Open
										</MenuItem>
                                <MenuItem onClick={() => getInfo(item)}>Get info</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        const payload = {
                                            obj: {},
                                            ancestors: ancestors,
                                            name: item
                                        };
                                        dispatch(deleteItem(payload));
                                    }}
                                    color="red"
                                >
                                    Delete
										</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                );
            })}
            {
                ancestors.length ? <div className="add-item">
                    <button
                        onClick={() => {
                            createNewFolder()

                        }}
                        className="add-button"
                    >
                        <AddIcon w={6} h={6} color="gainsboro" />
                    </button>
                </div> : ''
            }
            <ItemInfo
                isOpen={showInfo}
                info={infoData}
                onClose={() => {
                    setInfoData({});
                    setShowInfo(false);
                }}
            />
            <AddItem isOpen={showAddModal} ancestors={ancestors} onClose={() => {
                setshowAddModal(false);
            }} />
        </div >
    );
};

export default MainContent;