import chevronLeft from '@/assets/icons/chevron-left.svg';
import Input from '@/components/common/Input';
import PopularSearches from '@/components/search/PopularSearches';
import SearchResults from '@/components/search/SearchResults';
import { Link } from 'react-router-dom';

const Search = () => {
  const search = () => {
    console.log('1');
  };

  return (
    <div className='h-full'>
      <div className='h-full rounded-t-[20px] shadow-[0px_0px_20px_0px_#00000010]'>
        <div className='flex items-center p-5'>
          <Link to='/'>
            <img src={chevronLeft} className='bg-red hover:fill-slate-400' />
          </Link>
          <Input
            placeholder='같이 버킷리스트 찾아볼까요?'
            onChange={() => {}}
            onSearch={search}
            value=''
          />
        </div>
        <SearchResults />
        {/* <NoSearchResult /> */}
        <PopularSearches />
      </div>
    </div>
  );
};

export default Search;