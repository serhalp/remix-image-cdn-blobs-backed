import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const getImageUrl = (filename: string): string => {
  const funcPath = `/image?filename=${encodeURIComponent(filename)}`;
  return `/.netlify/images/?url=${encodeURIComponent(
    funcPath
  )}&fit=cover&w=400`;
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div>
        An image:
        <img
          src={getImageUrl("old-man-yells-forever.gif")}
          alt="An old man yelling forever"
        />
      </div>
      <div>
        An image with a deeply nested path:
        <img src={getImageUrl("animals/camel.jpg")} alt="A camel" />
      </div>
    </div>
  );
}
