interface TagProps {
  techName: string;
}

const Tag = ({ techName }: TagProps) => {
  return (
    <div className='flex items-center py-1 px-3 rounded-xl h-8 border-2 border-black bg-slate-100'>
      {techName}
    </div>
  );
};

export default Tag;
