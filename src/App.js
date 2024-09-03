import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// Simulated API calls
const fetchPosts = () => Promise.resolve([
  { id: 1, title: "First Post", excerpt: "This is the first post." },
  { id: 2, title: "Second Post", excerpt: "This is the second post." },
]);

const fetchPost = (id) => Promise.resolve({
  id,
  title: `Post ${id}`,
  blocks: [
    { content: "This is the content of the post.", children: [] },
    { content: "It can have multiple blocks.", children: [] },
  ]
});

const fetchPageContent = (page) => Promise.resolve({
  title: page.charAt(0).toUpperCase() + page.slice(1),
  blocks: [
    { content: `This is the ${page} page content.`, children: [] },
  ]
});

const fetchBooks = () => Promise.resolve([
  { title: "Book 1", author: "Author 1", recommendation: "Great read!" },
  { title: "Book 2", author: "Author 2", recommendation: "Highly recommended." },
]);

const Navigation = ({ fixedPages, morePagesGetter, currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const morePages = morePagesGetter();

  return (
    <nav className="flex flex-wrap justify-between items-center mb-8">
      <span className="text-lg font-semibold mr-6">Your Name</span>
      <div className="flex items-center space-x-4">
        {fixedPages.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`text-gray-600 hover:text-gray-900 transition-colors duration-200 ${currentPage === page ? 'font-semibold' : ''}`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
        {morePages.length > 0 && (
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-200"
            >
              More <ChevronDown size={16} className={`ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {morePages.map(page => (
                <button
                  key={page}
                  onClick={() => { setCurrentPage(page); setIsOpen(false); }}
                  className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Block = ({ block, level = 0 }) => {
  const hasChildren = block.children && block.children.length > 0;
  
  return (
    <div className={`mb-4 ${level > 0 ? 'ml-6' : ''}`}>
      <p className="text-gray-900">{block.content}</p>
      {hasChildren && (
        <div className="mt-2">
          {block.children.map((child, index) => (
            <Block key={index} block={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const PostList = ({ onSelectPost }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            <button 
              onClick={() => onSelectPost(post.id)} 
              className="text-blue-600 hover:underline transition-colors duration-200"
            >
              {post.title}
            </button>
          </h2>
          <p className="text-gray-600">{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

const Post = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(postId).then(setPost);
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">{post.title}</h1>
      <div className="prose">
        {post.blocks.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>
    </div>
  );
};

const Bookshelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">My Bookshelf</h1>
      <div className="space-y-6">
        {books.map((book, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-600">by {book.author}</p>
            <p className="mt-2">{book.recommendation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const GenericPage = ({ page }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchPageContent(page).then(setContent);
  }, [page]);

  if (!content) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">{content.title}</h1>
      <div className="prose">
        {content.blocks.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('posts');
  const [selectedPostId, setSelectedPostId] = useState(null);
  
  const fixedPages = ['posts', 'about', 'bookshelf'];
  const allPages = [...fixedPages, 'travel', 'food', 'projects', 'contact'];
  
  const getMorePages = () => allPages.filter(page => !fixedPages.includes(page));

  const renderContent = () => {
    switch (currentPage) {
      case 'posts':
        return selectedPostId 
          ? <Post postId={selectedPostId} /> 
          : <PostList onSelectPost={setSelectedPostId} />;
      case 'bookshelf':
        return <Bookshelf />;
      default:
        return <GenericPage page={currentPage} />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-serif">
      <Navigation 
        fixedPages={fixedPages} 
        morePagesGetter={getMorePages}
        currentPage={currentPage} 
        setCurrentPage={(page) => {
          setCurrentPage(page);
          setSelectedPostId(null);
        }}
      />
      <main>{renderContent()}</main>
      <footer className="mt-16 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
};

export default App;