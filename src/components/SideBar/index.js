import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styles
import './SideBar.css';

//redux file imports
import { setAncestors } from '../../redux/actions/ancestorsAction';
import { getFileFolderInitialList } from '../../redux/actions/fileFolderActions';
import getItemDetails from '../../redux/actions/itemDetails';

//component imports
import SidebarItem from './SidebarItem';

function SideBar() {
    const dispatch = useDispatch();
    const dataList = useSelector((state) => state.data);
    const ancestors = useSelector((state) => state.ancestors);

    useEffect(
        () => {
            dispatch(getFileFolderInitialList());
        },
        [dataList, dispatch]
    );


    return (
        <div className="sidebar">
            {Object.entries(dataList).map(([key, value]) => {
                return (
                    <SidebarItem
                        level={0}
                        ancestors={[]}
                        nextKey={key}
                        value={value}
                        onClickItem={(ancestors, selectedKey, shouldAdd) => {
                            let ancestorPath = ancestors;
                            if (shouldAdd) {
                                ancestorPath = ancestors.concat(selectedKey);
                            }
                            dispatch(setAncestors(ancestorPath));
                            dispatch(getItemDetails(ancestorPath));
                        }}
                        key={key}
                        path={ancestors}
                    />
                );
            })}
        </div>
    );
}


export default SideBar;
