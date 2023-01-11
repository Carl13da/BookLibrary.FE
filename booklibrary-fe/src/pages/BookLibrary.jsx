import { memo, useState, useEffect } from 'react';
import SearchBy from '../components/SearchBy';
import { getBooks } from '../services/books';

const BookLibraryPage = () => {
  const [books, setBooks] = useState([
    {
      Title: 'Pride and Prejudice',
      FirstName: 'Jane',
      LastName: 'Austin',
      TotalCopies: 100,
      CopiesInUse: 80,
      Type: 'HardCover',
      ISBN: '12345678',
      Category: 'Fiction',
    },
  ]);

  useEffect(() => {
    const books = getBooks();

    if (!!books?.length) {
      setBooks(books);
    }
  }, []);

  return (
    <div class='flex flex-col'>
      <SearchBy></SearchBy>
      <div class='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
        <div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div class='overflow-hidden'>
            <table class='min-w-full'>
              <thead class='bg-gray-200 border-b'>
                <tr>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Book Title
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Authors
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Type
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    ISBN
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Category
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Available Copies
                  </th>
                </tr>
              </thead>
              <tbody>
                {books.map((item, key) => {
                  return (
                    <tr
                      class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'
                      key={key}
                    >
                      <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.Title}
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        {`${item.FirstName}${item.LastName}`}
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        {item.Type}
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        {item.ISBN}
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        {item.Category}
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        {`${item.CopiesInUse}/${item.TotalCopies}`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(BookLibraryPage);
