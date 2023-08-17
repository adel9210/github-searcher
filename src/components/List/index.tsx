interface ListProps<T> {
    items?: T[];
    renderItem: (item: T) => JSX.Element;
}

export const List = <T extends object>({items, renderItem}: ListProps<T>) => {
    return (
        <div className="card-list">
            {items?.map((item: T, i: number) => (
                <div key={i}>{renderItem(item)}</div>
            ))}

            {
                !items?.length && <p>No Records!</p>
            }
        </div>
    );
};
