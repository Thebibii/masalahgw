import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import locale from "dayjs/locale/id";
dayjs.extend(relativeTime);
dayjs.locale("id");
export const useCreatedAt = (created_at) => {
  const now = dayjs(created_at).fromNow("s");
  return `Dibuat saat ${now} yang lalu`;
};
