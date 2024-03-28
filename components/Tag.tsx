interface TagProps {
  techName: string;
}

const Tag = ({ techName }: TagProps) => {
  return (
    <div className='flex items-center py-1 px-3 rounded-xl h-7 text-sm text-custom-orange bg-orange-100'>
      {techName}
    </div>
  );
};

export default Tag;
