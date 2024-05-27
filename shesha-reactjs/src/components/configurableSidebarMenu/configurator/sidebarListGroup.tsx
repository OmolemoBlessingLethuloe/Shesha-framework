import React, { FC } from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import ShaIcon, { IconType } from '@/components/shaIcon';
import { ISidebarGroup, ISidebarMenuItem } from '@/interfaces/sidebar';
import { useStyles } from '@/components/listEditor/styles/styles';

export interface IContainerRenderArgs {
  index?: number[];
  id?: string;
  items: ISidebarMenuItem[];

  onChange: (newValue: ISidebarMenuItem[]) => void;
}

export interface ISidebarMenuGroupProps {
  index: number[];
  item: ISidebarGroup;
  onChange: (newValue: ISidebarGroup) => void;
  containerRendering: (args: IContainerRenderArgs) => React.ReactNode;
}

export const SidebarListGroup: FC<ISidebarMenuGroupProps> = ({ item, index, onChange, containerRendering }) => {
  const { styles } = useStyles();
  return (
    <>
      {item.icon && <ShaIcon iconName={item.icon as IconType} />}
      <span className={styles.listItemName}>{item.title}</span>
      {item.tooltip && (
        <Tooltip title={item.tooltip}>
          <QuestionCircleOutlined className={styles.helpIcon} />
        </Tooltip>
      )}
      {containerRendering({
        index: index,
        items: item.childItems || [],
        onChange: (newItems) => {
          onChange({ ...item, childItems: [...newItems] });
        }
      })}
    </>
  );
};