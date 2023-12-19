interface Props {
  params: {
    id: string;
  };
}

export default async function Profile({ params: { id } }: Props) {
  return (
    <div className='flex-1 space-y-4 p-8 pt-6'>
      <div className='flex items-center justify-between space-y-2'>
        <h2 className='text-3xl font-bold tracking-tight text-white'>
          {id}&#39;s Profile
        </h2>
      </div>
    </div>
  );
}
