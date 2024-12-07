import { mockBucketData } from '@/constants/bucketDetail/mockData';

const Description = () => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: mockBucketData.description }}
        className='pb-5'
      ></div>
      <hr />
    </>
  );
};

export default Description;