import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAncestors } from "../../redux/actions/ancestorsAction";
import { getFileFolderInitialList } from "../../redux/actions/fileFolderActions";
import getItemDetails from "../../redux/actions/itemDetails";
import './BreadCrumbs.css';
function BreadCrumbs() {
    const dispatch = useDispatch();
    const dataList = useSelector((state) => state.data);
    const ancestors = useSelector((state) => state.ancestors);

    useEffect(() => {
        dispatch(getFileFolderInitialList());
    }, [dataList, dispatch]);

    let lastIndex = ancestors.length - 1;

    return (
        <div className="breadcrumbs">
            {ancestors.map((item, index) => {
                return (
                    <div key={index}>
                        <span
                            className="breadcrumb"
                            onClick={() => {
                                dispatch(setAncestors(ancestors.slice(0, index + 1)));
                                dispatch(getItemDetails(ancestors.slice(0, index + 1)));
                            }} style={lastIndex === index ? { color: 'black' } : {}}>
                            {item}
                        </span>
                        {lastIndex !== index ? <span className="separator">/</span> : ''}
                    </div>
                );
            })}
        </div>
    )
}
export default BreadCrumbs;
