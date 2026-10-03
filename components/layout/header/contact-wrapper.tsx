type Props = {
  icon: React.ReactNode;
  text: string;
};

export default function ContactWrapper({ icon, text }: Props) {
  return (
    <div className="flex items-center gap-2 px-4 border-r border-gray-600">
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
