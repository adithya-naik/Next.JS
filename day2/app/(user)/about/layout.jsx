// app/about/layout.jsx
export default function AboutLayout({ children }) {
  return (
    <div className="p-4 min-h-screen h-full my-auto border">
      <p>This is About Page Layout</p>
      {children}
    </div>
  );
}


