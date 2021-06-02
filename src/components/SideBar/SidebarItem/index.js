import '../SideBar.css';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react';

const SidebarItem = ({ ancestors, nextKey, value, level, onClickItem, path }) => {
  let leftOffset = level * 5;
  if (typeof value !== "object") {
    return (
      <div
        className="sidebar-item"
        style={{
          marginLeft: `${leftOffset}px`
        }}
      >
        {((nextKey).length > 15) ?
          <span>{(((nextKey).substring(0, 15 - 3)) + '...')}</span> :
          <span>{nextKey}</span>}
      </div>
    );
  }
  return (
    <div style={{ marginLeft: `${leftOffset}px` }} className="sidebar-item-nested">
      <div
        onClick={() => {
          if (ancestors.length) {
            onClickItem(ancestors, nextKey, !path.includes(nextKey));
          }
        }}
        className="folder-container"
        style={ancestors.length ? { cursor: 'pointer' } : { cursor: 'not-allowed', textTransform: 'uppercase', color: 'grey' }}
      >
        {((nextKey).length > 10) ?
          <Tooltip isDisabled={(nextKey).length < 10} hasArrow label={nextKey} bg="blackAlpha.900" color="white">
            <span> {(((nextKey).substring(0, 10 - 3)) + '...')}</span></Tooltip> :
          <span>{nextKey}</span>}
        {ancestors.length ? <span className="chevron-icon">
          {!path.includes(nextKey) ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </span> : ''}
      </div>
      {(!ancestors.length || path.includes(nextKey)) && (
        <div>
          {Object.entries(value).map(([k, v]) => {
            return (
              <div key={k}>
                <SidebarItem
                  onClickItem={onClickItem}
                  level={level + 1}
                  ancestors={ancestors.concat(nextKey)}
                  nextKey={k}
                  value={v}
                  path={path}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
