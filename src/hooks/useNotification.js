import toast from "react-hot-toast";

export const useNotification = (content) => {
  return toast(content, {
    duration: 4000,
    position: "bottom-right",

    style: {
      paddingTop: 7,
      paddingBottom: 7,
    },
    className: "text-sm",
  });
};
