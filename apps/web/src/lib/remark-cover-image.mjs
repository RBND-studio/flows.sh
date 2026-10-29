/**
 * Marks the first top-level <Image> of an MDX file with a `cover` prop. Pages that lead with the
 * file's content use it to load that image eagerly, since it's usually the LCP element.
 */
export default function remarkCoverImage() {
  return (tree) => {
    const cover = tree.children.find(
      (node) => node.type === "mdxJsxFlowElement" && node.name === "Image",
    );
    cover?.attributes.push({ type: "mdxJsxAttribute", name: "cover", value: null });
  };
}
