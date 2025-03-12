import {
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  comments: ChatBubbleBottomCenterTextIcon,
  users: UserGroupIcon,
  posts: DocumentIcon,
};

export function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-secondary-50 p-2 shadow-md hover:scale-105 transition-all">
      <div className="flex p-4 text-secondary-600">
        {Icon ? <Icon className="size-6" /> : null}
        <h3 className="mr-2 text-lg font-semibold">{title}</h3>
      </div>
      <p
        className={`truncate rounded-xl bg-secondary-0 px-4 py-8 text-center text-2xl text-secondary-500`}
      >
        {value}
      </p>
    </div>
  );
}
