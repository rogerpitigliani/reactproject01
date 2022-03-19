import { render, screen } from "@testing-library/react";
import { PostCard } from ".";

const post = {
  title: "title 1",
  body: "body 1",
  id: 1,
  cover: "img/img.png",
};

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    const { debug } = render(<PostCard post={post} />);
    expect(screen.getByRole('img', { name: /title/i }))
        .toHaveAttribute('src',post.cover);

    expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
        
    
  });


  it('should match snapshot', () => {
    const {container} = render(<PostCard post={post} />);
    expect(container.firstChild).toMatchSnapshot();
  });

});
