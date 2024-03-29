import React from "react";
import ListGroup from "../../Elements/ListGroup";
import List from "../../Elements/ListGroup/List";

const KategoriDiskusi = (props) => {
  const { title } = props;
  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900/70">{title}</h2>
      <ListGroup>
        <List to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 aspect-square"
          >
            <path d="M22 7L13.5 15.5 8.5 10.5 2 17" />
            <path d="M16 7L22 7 22 13" />
          </svg>
          <span>FYP</span>
        </List>
        <List>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 aspect-square"
          >
            <path d="M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3.003 3.003 0 116 0v1" />
            <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 014-4h4a4 4 0 014 4v3c0 3.3-2.7 6-6 6M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4" />
          </svg>
          <span>Dari Admint</span>
        </List>
      </ListGroup>
    </div>
  );
};

export default KategoriDiskusi;
