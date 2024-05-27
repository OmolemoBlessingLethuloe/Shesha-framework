import React, { useState, useTransition } from 'react';
import { ListItem, ListItemWithId } from '../listEditor/models';
import { ListEditorRenderer } from '../listEditorRenderer';
import { ListEditor, ListEditorChildrenFn, ListEditorSectionRenderingFn } from '../listEditor';
import { Skeleton } from 'antd';

interface ItemPropertiesRendererProps<TItem extends ListItem> {
    item: TItem;
    onChange: (newValues: TItem) => void;
    readOnly: boolean;
}

export interface IListEditorWithPropertiesPanelProps<TItem extends ListItemWithId> {
    readOnly: boolean;
    value: TItem[];
    onChange: (newValue: TItem[]) => void;

    header?: React.ReactNode;
    children: ListEditorChildrenFn<TItem>;
    groupHeader?: ListEditorSectionRenderingFn<TItem>;
    initNewItem: (items: TItem[]) => TItem;
    itemProperties: (itemProps: ItemPropertiesRendererProps<TItem>) => React.ReactNode;
}

export const ListEditorWithPropertiesPanel = <TItem extends ListItemWithId>({ value, onChange, readOnly, header, groupHeader, initNewItem, children, itemProperties }: IListEditorWithPropertiesPanelProps<TItem>) => {
    const [selectedItem, setSelectedItem] = useState<TItem>();
    const [isPending, startTransition] = useTransition();

    const onSelectionChange = (item: TItem) => {
        startTransition(() => {
            setSelectedItem(item);
        });
    };

    const onItemUpdate = (newValues: TItem) => {
        if (!selectedItem || selectedItem.id !== newValues.id) return;

        Object.assign(selectedItem, newValues);
        onChange([...value]);
    };

    return (
        <ListEditorRenderer
            sidebarProps={{
                title: 'Properties',
                content: isPending 
                    ? <Skeleton loading /> 
                    : itemProperties({ item: selectedItem, onChange: onItemUpdate, readOnly: readOnly }),
            }}
        >
            {header}

            <ListEditor<TItem>
                value={value}
                onChange={onChange}
                initNewItem={initNewItem}
                readOnly={readOnly}
                selectionType='single'
                onSelectionChange={onSelectionChange}
                header={groupHeader}
            >
                {children}
            </ListEditor>
        </ListEditorRenderer>
    );
};