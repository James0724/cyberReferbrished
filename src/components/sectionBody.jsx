import Title from "./sectiontitle";

function Body({ content, titleDetails }) {
  const title = titleDetails.title;
  const small_title = titleDetails.small_title;
  return (
    <>
      <Title tlt={title} smlt={small_title} />
      <div class="box1">
        <p className="regularfont">{content}</p>
      </div>
    </>
  );
}

export default Body;
