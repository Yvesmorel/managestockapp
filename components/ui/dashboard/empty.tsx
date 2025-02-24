function EmptyText({ text, className }: { text: string; className?: string }) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <p className={`text-sm ${className}`}>{text}</p>
    </div>
  );
}

export default EmptyText;
