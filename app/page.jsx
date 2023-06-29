import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered  Thoughts</span>
    </h1>
    <p className='desc text-center'>
    Thoughts are abstract concepts of sayings by people that are meant to share knowledge, and guidance, and be inspiring or motivating
    Thoughtverse is an open-source AI Quotation tool for modern world to
    discover, create and share creative Thoughts
    </p>

    <Feed />
  </section>
);

export default Home;
