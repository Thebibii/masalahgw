import React from "react";
import ListGroup from "../../Elements/ListGroup";
import List from "../../Elements/ListGroup/List";

const Pengaturan = (props) => {
  const { title, notif } = props;
  const count = notif?.filter((state) => state.is_seen == 0);
  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900/70">{title}</h2>
      <ListGroup>
        <List to="/akun">
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
            <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
          <span>Akun</span>
        </List>
        <List to="/kelola">
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
            <rect width={18} height={18} x={3} y={3} rx={2} />
            <path d="M9 8h7M8 12h6M11 16h5" />
          </svg>
          <span>Kelola Post</span>
        </List>
        <List to="/notifikasi">
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
            <path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 003.4 0M4 2C2.8 3.7 2 5.7 2 8M22 8c0-2.3-.8-4.3-2-6" />
          </svg>
          <span>
            {notif?.length > 0 && count.length > 0 && count.length} Notifikasi
          </span>
        </List>
      </ListGroup>
    </div>
  );
};

export default Pengaturan;
