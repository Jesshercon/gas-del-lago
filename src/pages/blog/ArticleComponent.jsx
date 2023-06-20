export const ArticleComponent = ({ image, articleTitle, ...restProps }) => {
  return (
    <div {...restProps}>
      <div>
        <img
          src={image}
          className="rounded-t-md w-full h-48 object-cover object-center"
        />
      </div>
      <p className="bg-blue-primary text-white-main font-bold px-6 py-8 rounded-b-md">
        {articleTitle}
      </p>
    </div>
  );
};

// export default ArticleComponent;
